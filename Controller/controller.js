import book from "../Utils/Schema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



 const signup=async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await book.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new book({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const login= async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await book.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Create JWT payload & sign token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'strict',
      maxAge: 3600000, 
    });

    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




const logout= (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.json({ message: 'Logged out successfully' });
};

const profile=(req, res) => {
  res.json({
    message: 'Profile fetched successfully',
    user: req.user  
  });
};







export { signup, login, logout ,profile};

import express, { Router } from 'express';
import Investment from '../models/Investment';
import { authMiddleware } from '../middleware/auth';

const router: Router = express.Router();

// Get all investments (public)
router.get('/', async (req, res) => {
  try {
    const investments = await Investment.find().sort({ displayOrder: 1 });
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single investment (public)
router.get('/:id', async (req, res) => {
  try {
    const investment = await Investment.findById(req.params.id);
    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }
    res.json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create investment (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const investment = new Investment(req.body);
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update investment (protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const investment = await Investment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }
    res.json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete investment (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const investment = await Investment.findByIdAndDelete(req.params.id);
    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }
    res.json({ message: 'Investment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

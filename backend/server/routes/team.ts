import express, { Router } from 'express';
import TeamMember from '../models/TeamMember';
import { authMiddleware } from '../middleware/auth';

const router: Router = express.Router();

// Get all team members (public)
router.get('/', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find().sort({ displayOrder: 1 });
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single team member (public)
router.get('/:id', async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json(teamMember);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create team member (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const teamMember = new TeamMember(req.body);
    await teamMember.save();
    res.status(201).json(teamMember);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update team member (protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const teamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json(teamMember);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete team member (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const teamMember = await TeamMember.findByIdAndDelete(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json({ message: 'Team member deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

import express, { Router } from 'express';
import Investment from '../models/Investment';
import TeamMember from '../models/TeamMember';
import Contact from '../models/Contact';
import { authMiddleware } from '../middleware/auth';

const router: Router = express.Router();

// Get dashboard stats (protected)
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const [investmentCount, teamMemberCount, contactCount, newContactCount] = await Promise.all([
      Investment.countDocuments(),
      TeamMember.countDocuments(),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'New' }),
    ]);

    res.json({
      investments: investmentCount,
      teamMembers: teamMemberCount,
      contacts: contactCount,
      newContacts: newContactCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// @route   POST /api/members
// @desc    Submit volunteer application
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, age, address, interests, availability, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and phone are required'
            });
        }

        // Check if email already exists
        const existingMember = await Member.findOne({ email });
        if (existingMember) {
            return res.status(400).json({
                success: false,
                message: 'An application with this email already exists'
            });
        }

        // Create new member
        const member = await Member.create({
            name,
            email,
            phone,
            age,
            address,
            interests,
            availability,
            message
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for your interest in joining us! We will contact you shortly.',
            data: member
        });
    } catch (error) {
        console.error('Join form error:', error);
        
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'An application with this email already exists'
            });
        }
        
        res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again later.'
        });
    }
});

// @route   GET /api/members
// @desc    Get all members (admin)
router.get('/', async (req, res) => {
    try {
        const members = await Member.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: members.length,
            data: members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching members'
        });
    }
});

// @route   GET /api/members/:id
// @desc    Get single member
router.get('/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: 'Member not found'
            });
        }

        res.json({
            success: true,
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching member'
        });
    }
});

// @route   PUT /api/members/:id
// @desc    Update member status
router.put('/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        if (!member) {
            return res.status(404).json({
                success: false,
                message: 'Member not found'
            });
        }

        res.json({
            success: true,
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating member'
        });
    }
});

// @route   DELETE /api/members/:id
// @desc    Delete a member
router.delete('/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: 'Member not found'
            });
        }

        res.json({
            success: true,
            message: 'Member deleted'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting member'
        });
    }
});

module.exports = router;

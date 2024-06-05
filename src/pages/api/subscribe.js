export default async(req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
        // Simulating subscription logic, replace this with actual email service integration
        console.log(`Subscribing ${email} to the newsletter...`);

        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Respond with success
        return res.status(201).json({ error: null });
    } catch (error) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
};
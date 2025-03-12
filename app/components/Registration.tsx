"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    experience: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", team: "", experience: "" })
  }

  return (
    <section id="register" className="py-20 bg-hackathon-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Register for Colossus 2025
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-hackathon-purple text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-hackathon-purple text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="team" className="block mb-2">
              Team Name (optional)
            </label>
            <input
              type="text"
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-hackathon-purple text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block mb-2">
              Experience Level
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-hackathon-purple text-white rounded-md"
            >
              <option value="">Select your experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-hackathon-purple text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Registration


import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    organization: '',
    category: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Email məlumatlarını hazırla
      const emailBody = `
Name: ${formData.name}
Surname: ${formData.surname}
Email: ${formData.email}
Organization: ${formData.organization}
Feedback Category: ${formData.category}

Message:
${formData.message}
      `.trim()

      // Mailto link ilə email göndər
      const mailtoLink = `mailto:qumru.suleymanli@gmail.com?subject=Contact Form: ${formData.category || 'General Inquiry'}&body=${encodeURIComponent(emailBody)}`

      window.location.href = mailtoLink

      setSubmitStatus('success')

      // Formu təmizlə
      setFormData({
        name: '',
        surname: '',
        email: '',
        organization: '',
        category: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] bg-[#2a5942] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3dac5c]/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64">
          <h1 className="text-white font-semibold leading-[120%]">
            Contact us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6 relative">
        {/* Decorative blur */}
        <div className="absolute bottom-0 right-0 w-[846px] h-[873px] rounded-full bg-gradient-to-br from-[#3dac5c]/5 to-transparent backdrop-blur-sm opacity-30" />

        <div className="max-w-[822px] mx-auto lg:ml-0 relative z-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#d9d9d9] rounded-lg p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-muted-foreground text-sm sm:text-base leading-[160%]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter name here"
                className="h-10 px-4 py-3 border border-[#d9d9d9] rounded-lg bg-white text-muted-foreground placeholder:text-[#b3b3b3] text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3dac5c]"
              />
            </div>

            {/* Surname */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="surname"
                className="text-muted-foreground text-sm sm:text-base leading-[160%]"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                placeholder="Enter surname here"
                className="h-10 px-4 py-3 border border-[#d9d9d9] rounded-lg bg-white text-muted-foreground placeholder:text-[#b3b3b3] text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3dac5c]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-muted-foreground text-sm sm:text-base leading-[160%]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email here"
                className="h-10 px-4 py-3 border border-[#d9d9d9] rounded-lg bg-white text-muted-foreground placeholder:text-[#b3b3b3] text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3dac5c]"
              />
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="organization"
                className="text-muted-foreground text-sm sm:text-base leading-[160%]"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter organization here"
                className="h-10 px-4 py-3 border border-[#d9d9d9] rounded-lg bg-white text-muted-foreground placeholder:text-[#b3b3b3] text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3dac5c]"
              />
            </div>

            {/* Feedback Category */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-muted-foreground text-sm sm:text-base leading-[160%]"
              >
                Feedback Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="min-h-[40px] px-4 py-2 border border-[#d9d9d9] rounded-lg bg-white text-muted-foreground text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3dac5c]"
              >
                <option value="">Select feedback category</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="technical">Technical Question</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-muted-foreground text-sm sm:text-base leading-[160%]"
              >
                Share your feedback
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter message here"
                className="min-h-[80px] px-4 py-3 border border-[#d9d9d9] rounded-lg bg-white text-muted-foreground placeholder:text-[#b3b3b3] text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3dac5c] resize-y"
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Your email client will open shortly. Please send the email to complete the contact request.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                Something went wrong. Please try again or email us directly at qumru.suleymanli@gmail.com
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 px-2 py-2 bg-[#3dac5c] text-white text-[14px] sm:text-base font-semibold rounded-lg hover:bg-[#3dac5c]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact

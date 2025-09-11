"use client"

import { useState, useEffect } from "react"
import { strapiAPI, type TeamMember, type Service, type Testimonial, type HeroSlide, type BlogPost } from "@/lib/strapi"
import {
  fallbackTeamMembers,
  fallbackServices,
  fallbackTestimonials,
  fallbackHeroSlides,
  fallbackBlogPosts,
} from "@/lib/api-fallbacks"

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(fallbackTeamMembers)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const data = await strapiAPI.getTeamMembers()
        setTeamMembers(data.length > 0 ? data : fallbackTeamMembers)
      } catch (err) {
        console.warn("Failed to fetch team members from Strapi, using fallback data")
        setError("Failed to load team members")
        setTeamMembers(fallbackTeamMembers)
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  return { teamMembers, loading, error }
}

export function useServices() {
  const [services, setServices] = useState<Service[]>(fallbackServices)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await strapiAPI.getServices()
        setServices(data.length > 0 ? data : fallbackServices)
      } catch (err) {
        console.warn("Failed to fetch services from Strapi, using fallback data")
        setError("Failed to load services")
        setServices(fallbackServices)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading, error }
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await strapiAPI.getTestimonials()
        setTestimonials(data.length > 0 ? data : fallbackTestimonials)
      } catch (err) {
        console.warn("Failed to fetch testimonials from Strapi, using fallback data")
        setError("Failed to load testimonials")
        setTestimonials(fallbackTestimonials)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}

export function useHeroSlides() {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(fallbackHeroSlides)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchHeroSlides() {
      try {
        const data = await strapiAPI.getHeroSlides()
        setHeroSlides(data.length > 0 ? data : fallbackHeroSlides)
      } catch (err) {
        console.warn("Failed to fetch hero slides from Strapi, using fallback data")
        setError("Failed to load hero slides")
        setHeroSlides(fallbackHeroSlides)
      } finally {
        setLoading(false)
      }
    }

    fetchHeroSlides()
  }, [])

  return { heroSlides, loading, error }
}

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const data = await strapiAPI.getBlogPosts()
        setBlogPosts(data.length > 0 ? data : fallbackBlogPosts)
      } catch (err) {
        console.warn("Failed to fetch blog posts from Strapi, using fallback data")
        setError("Failed to load blog posts")
        setBlogPosts(fallbackBlogPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return { blogPosts, loading, error }
}

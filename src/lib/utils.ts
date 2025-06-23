import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} - ${formatPrice(max)}`
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`
  } else if (diffInHours < 24 * 7) {
    const days = Math.floor(diffInHours / 24)
    return `${days}d ago`
  } else {
    return formatDate(date)
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getStyleTagColor(tag: string): string {
  const colors: Record<string, string> = {
    boho: 'bg-orange-100 text-orange-800',
    vintage: 'bg-amber-100 text-amber-800',
    minimal: 'bg-gray-100 text-gray-800',
    artsy: 'bg-purple-100 text-purple-800',
    cottagecore: 'bg-green-100 text-green-800',
    grunge: 'bg-gray-800 text-gray-100',
    modern: 'bg-blue-100 text-blue-800',
    romantic: 'bg-pink-100 text-pink-800',
    gothic: 'bg-gray-900 text-gray-100',
    streetwear: 'bg-yellow-100 text-yellow-800',
  }
  return colors[tag] || 'bg-gray-100 text-gray-800'
}

export function getVibeMatchPercentage(boardStyles: string[], thrifterStyles: string[]): number {
  if (boardStyles.length === 0 || thrifterStyles.length === 0) return 0
  
  const matches = boardStyles.filter(style => thrifterStyles.includes(style)).length
  return Math.round((matches / boardStyles.length) * 100)
}
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

// Color themes
export const colorThemes = [
  {
    name: "red",
    primary: "rgb(220, 38, 38)", // red-600
    primaryHover: "rgb(185, 28, 28)", // red-700
    background: "rgb(254, 242, 242)", // red-50
    accent: "rgb(254, 226, 226)", // red-100
    accentDark: "rgb(252, 165, 165)", // red-200
    text: "rgb(127, 29, 29)", // red-800
  },
  {
    name: "purple",
    primary: "rgb(147, 51, 234)", // purple-600
    primaryHover: "rgb(126, 34, 206)", // purple-700
    background: "rgb(250, 245, 255)", // purple-50
    accent: "rgb(243, 232, 255)", // purple-100
    accentDark: "rgb(221, 214, 254)", // purple-200
    text: "rgb(88, 28, 135)", // purple-800
  },
  {
    name: "blue",
    primary: "rgb(37, 99, 235)", // blue-600
    primaryHover: "rgb(29, 78, 216)", // blue-700
    background: "rgb(239, 246, 255)", // blue-50
    accent: "rgb(219, 234, 254)", // blue-100
    accentDark: "rgb(191, 219, 254)", // blue-200
    text: "rgb(30, 64, 175)", // blue-800
  },
  {
    name: "green",
    primary: "rgb(34, 197, 94)", // green-500
    primaryHover: "rgb(22, 163, 74)", // green-600
    background: "rgb(240, 253, 244)", // green-50
    accent: "rgb(220, 252, 231)", // green-100
    accentDark: "rgb(187, 247, 208)", // green-200
    text: "rgb(22, 101, 52)", // green-800
  },
  {
    name: "orange",
    primary: "rgb(234, 88, 12)", // orange-600
    primaryHover: "rgb(194, 65, 12)", // orange-700
    background: "rgb(255, 247, 237)", // orange-50
    accent: "rgb(254, 215, 170)", // orange-100
    accentDark: "rgb(253, 186, 116)", // orange-200
    text: "rgb(154, 52, 18)", // orange-800
  },
];

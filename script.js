/**
 * Halloween Travel Itinerary - JavaScript Functions
 * Simple, clean code for easy maintenance and GitHub collaboration
 */

// Global state
let currentDay = 1

/**
 * Initialize the application
 */
function init() {
  loadData()
  console.log("🎃 Halloween Travel Itinerary loaded successfully!")
}

/**
 * Switch between day tabs
 * @param {number} dayNumber - The day number to show (1-7)
 */
function showDay(dayNumber) {
  // Validate input
  if (dayNumber < 1 || dayNumber > 7) {
    console.error("Invalid day number:", dayNumber)
    return
  }

  // Hide all days
  const days = document.querySelectorAll(".day")
  days.forEach((day) => {
    day.classList.remove("active")
    day.setAttribute("aria-hidden", "true")
  })

  // Remove active from all tabs
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab, index) => {
    tab.classList.remove("active")
    tab.setAttribute("aria-selected", "false")
  })

  // Show selected day
  const selectedDay = document.getElementById(`day-${dayNumber}`)
  const selectedTab = tabs[dayNumber - 1]

  if (selectedDay && selectedTab) {
    selectedDay.classList.add("active")
    selectedDay.setAttribute("aria-hidden", "false")
    selectedTab.classList.add("active")
    selectedTab.setAttribute("aria-selected", "true")
    currentDay = dayNumber
  }
}

/**
 * Edit the main trip header information
 */
function editHeader() {
  const titleElement = document.getElementById("trip-title")
  const descriptionElement = document.getElementById("trip-description")

  if (!titleElement || !descriptionElement) {
    console.error("Header elements not found")
    return
  }

  const currentTitle = titleElement.textContent
  const currentDescription = descriptionElement.textContent

  const newTitle = prompt("Enter trip title:", currentTitle)
  const newDescription = prompt("Enter trip description:", currentDescription)

  if (newTitle !== null && newTitle.trim() !== "") {
    titleElement.textContent = newTitle
  }

  if (newDescription !== null && newDescription.trim() !== "") {
    descriptionElement.textContent = newDescription
  }

  // Auto-save changes
  saveData()
}

/**
 * Edit a specific day's information
 * @param {number} dayNumber - The day number to edit (1-7)
 */
function editDay(dayNumber) {
  // Validate input
  if (dayNumber < 1 || dayNumber > 7) {
    console.error("Invalid day number:", dayNumber)
    return
  }

  const titleElement = document.getElementById(`day${dayNumber}-title`)
  const locationElement = document.getElementById(`day${dayNumber}-location`)
  const dateElement = document.getElementById(`day${dayNumber}-date`)

  // Edit basic day info
  if (titleElement) {
    const newTitle = prompt("Enter day title:", titleElement.textContent)
    if (newTitle !== null && newTitle.trim() !== "") {
      titleElement.textContent = newTitle
    }
  }

  if (locationElement) {
    const currentLocation = locationElement.textContent.replace("📍 ", "")
    const newLocation = prompt("Enter location:", currentLocation)
    if (newLocation !== null && newLocation.trim() !== "") {
      locationElement.textContent = "📍 " + newLocation
    }
  }

  if (dateElement) {
    const currentDate = dateElement.textContent.replace("📅 ", "")
    const newDate = prompt("Enter date:", currentDate)
    if (newDate !== null && newDate.trim() !== "") {
      dateElement.textContent = "📅 " + newDate
    }
  }

  // Edit activities for Day 1 (most detailed example)
  if (dayNumber === 1) {
    editActivity(1, 1)
    editActivity(1, 2)
    editActivity(1, 3)

    // Edit notes
    const notesElement = document.getElementById("day1-notes")
    if (notesElement) {
      const newNotes = prompt("Enter notes:", notesElement.textContent)
      if (newNotes !== null && newNotes.trim() !== "") {
        notesElement.textContent = newNotes
      }
    }
  }

  // Auto-save changes
  saveData()
}

/**
 * Edit a specific activity
 * @param {number} dayNumber - The day number (1-7)
 * @param {number} activityNumber - The activity number (1-3)
 */
function editActivity(dayNumber, activityNumber) {
  const timeElement = document.getElementById(`day${dayNumber}-act${activityNumber}-time`)
  const titleElement = document.getElementById(`day${dayNumber}-act${activityNumber}-title`)
  const descElement = document.getElementById(`day${dayNumber}-act${activityNumber}-desc`)

  if (timeElement) {
    const newTime = prompt("Enter time (e.g., 10:00):", timeElement.textContent)
    if (newTime !== null && newTime.trim() !== "") {
      timeElement.textContent = newTime
    }
  }

  if (titleElement) {
    const newTitle = prompt("Enter activity title:", titleElement.textContent)
    if (newTitle !== null && newTitle.trim() !== "") {
      titleElement.textContent = newTitle
    }
  }

  if (descElement) {
    const newDesc = prompt("Enter activity description:", descElement.textContent)
    if (newDesc !== null && newDesc.trim() !== "") {
      descElement.textContent = newDesc
    }
  }
}

/**
 * Save current data to localStorage
 */
function saveData() {
  try {
    const data = {
      version: "1.0",
      lastModified: new Date().toISOString(),
      tripInfo: {
        title: document.getElementById("trip-title")?.textContent || "",
        description: document.getElementById("trip-description")?.textContent || "",
      },
      days: {},
    }

    // Save Day 1 data (most complete example)
    const day1Data = {
      title: document.getElementById("day1-title")?.textContent || "",
      location: document.getElementById("day1-location")?.textContent || "",
      date: document.getElementById("day1-date")?.textContent || "",
      notes: document.getElementById("day1-notes")?.textContent || "",
      activities: [
        {
          time: document.getElementById("day1-act1-time")?.textContent || "",
          title: document.getElementById("day1-act1-title")?.textContent || "",
          description: document.getElementById("day1-act1-desc")?.textContent || "",
        },
        {
          time: document.getElementById("day1-act2-time")?.textContent || "",
          title: document.getElementById("day1-act2-title")?.textContent || "",
          description: document.getElementById("day1-act2-desc")?.textContent || "",
        },
        {
          time: document.getElementById("day1-act3-time")?.textContent || "",
          title: document.getElementById("day1-act3-title")?.textContent || "",
          description: document.getElementById("day1-act3-desc")?.textContent || "",
        },
      ],
    }

    data.days[1] = day1Data

    // Save to localStorage
    localStorage.setItem("halloween-itinerary", JSON.stringify(data))
    console.log("✅ Data saved successfully")
  } catch (error) {
    console.error("❌ Error saving data:", error)
  }
}

/**
 * Load data from localStorage
 */
function loadData() {
  try {
    const saved = localStorage.getItem("halloween-itinerary")
    if (!saved) {
      console.log("ℹ️ No saved data found")
      return
    }

    const data = JSON.parse(saved)
    console.log("📂 Loading saved data:", data)

    // Load trip info
    if (data.tripInfo) {
      const titleElement = document.getElementById("trip-title")
      const descElement = document.getElementById("trip-description")

      if (titleElement && data.tripInfo.title) {
        titleElement.textContent = data.tripInfo.title
      }

      if (descElement && data.tripInfo.description) {
        descElement.textContent = data.tripInfo.description
      }
    }

    // Load Day 1 data
    if (data.days && data.days[1]) {
      const day1 = data.days[1]

      // Load basic day info
      if (day1.title) document.getElementById("day1-title").textContent = day1.title
      if (day1.location) document.getElementById("day1-location").textContent = day1.location
      if (day1.date) document.getElementById("day1-date").textContent = day1.date
      if (day1.notes) document.getElementById("day1-notes").textContent = day1.notes

      // Load activities
      if (day1.activities && Array.isArray(day1.activities)) {
        day1.activities.forEach((activity, index) => {
          const actNum = index + 1
          if (activity.time) document.getElementById(`day1-act${actNum}-time`).textContent = activity.time
          if (activity.title) document.getElementById(`day1-act${actNum}-title`).textContent = activity.title
          if (activity.description) document.getElementById(`day1-act${actNum}-desc`).textContent = activity.description
        })
      }
    }

    console.log("✅ Data loaded successfully")
  } catch (error) {
    console.error("❌ Error loading data:", error)
  }
}

/**
 * Export data as JSON for sharing
 */
function exportData() {
  const data = JSON.parse(localStorage.getItem("halloween-itinerary") || "{}")
  const dataStr = JSON.stringify(data, null, 2)

  // Create download link
  const blob = new Blob([dataStr], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "halloween-itinerary.json"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)

  console.log("📤 Data exported successfully")
}

/**
 * Print the current itinerary
 */
function printItinerary() {
  window.print()
}

// Event listeners
document.addEventListener("DOMContentLoaded", init)
window.addEventListener("beforeunload", saveData)

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  // Arrow keys for day navigation
  if (event.key === "ArrowLeft" && currentDay > 1) {
    showDay(currentDay - 1)
  } else if (event.key === "ArrowRight" && currentDay < 7) {
    showDay(currentDay + 1)
  }
})

// Export functions for global access
window.showDay = showDay
window.editHeader = editHeader
window.editDay = editDay
window.exportData = exportData
window.printItinerary = printItinerary

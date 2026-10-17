/* ==========================================================================
   Journeys drawn on the map: [longitude, latitude, label, show label?]
   Locations follow common scholarly identifications; some (Ur, the Red Sea
   crossing, Mount Sinai) are traditional and debated.
   ========================================================================== */
window.ROUTES = {
  abraham: {
    title: "The journey of Abraham",
    legs: [
      { name: "Ur to Haran", pts: [[46.10, 30.96, "Ur", 1], [45.0, 32.6], [43.0, 34.4], [40.8, 35.7], [39.03, 36.86, "Haran", 1]] },
      { name: "Into Canaan", pts: [[39.03, 36.86], [37.6, 36.1], [36.8, 34.8], [36.3, 33.5], [35.28, 32.21, "Shechem", 1], [35.22, 31.93, "Bethel", 1]] },
      { name: "Down to Egypt, and back", pts: [[35.22, 31.93], [34.8, 31.2], [33.6, 30.9], [32.2, 30.7], [31.25, 29.85, "Egypt", 1], [32.6, 30.8], [34.2, 31.2], [35.10, 31.53, "Hebron", 1]] }
    ],
    marks: [[35.23, 31.78, "Moriah"], [35.48, 31.15, "Sodom"]]
  },
  exodus: {
    title: "The Exodus",
    legs: [
      { name: "Out of Egypt", pts: [[31.83, 30.80, "Rameses", 1], [32.10, 30.55, "Succoth", 0], [32.45, 30.25], [32.55, 29.95, "The Red Sea", 1]] },
      { name: "To Sinai", pts: [[32.55, 29.95], [32.85, 29.45, "Marah", 0], [33.10, 29.05, "Elim", 0], [33.45, 28.85], [33.975, 28.54, "Mount Sinai", 1]] },
      { name: "The wilderness", pts: [[33.975, 28.54], [34.4, 29.3], [34.6, 29.9], [34.43, 30.68, "Kadesh Barnea", 1], [35.0, 29.55, "Ezion-geber", 0], [35.6, 30.3], [35.75, 31.0], [35.725, 31.77, "Mount Nebo", 1], [35.444, 31.87, "Jericho", 1]] }
    ],
    marks: [[31.25, 29.85, "Memphis"], [35.23, 31.78, "Jerusalem"]]
  },
  paul: {
    title: "The journeys of Paul",
    legs: [
      { name: "First journey · AD 46–48", pts: [[36.16, 36.20, "Antioch", 1], [35.93, 36.12], [33.90, 35.18, "Salamis", 1], [32.41, 34.76, "Paphos", 1], [30.85, 36.96, "Perga", 0], [31.19, 38.31, "Pisidian Antioch", 1], [32.49, 37.87, "Iconium", 1], [32.33, 37.58, "Lystra", 1], [33.36, 37.35, "Derbe", 1], [32.33, 37.58], [31.19, 38.31], [30.70, 36.89, "Attalia", 0], [36.16, 36.20]] },
      { name: "Second journey · AD 49–52", pts: [[36.16, 36.20], [34.90, 36.92, "Tarsus", 1], [33.36, 37.35], [32.33, 37.58], [29.5, 38.9], [26.16, 39.75, "Troas", 1], [24.40, 40.94, "Neapolis", 0], [24.29, 41.01, "Philippi", 1], [22.94, 40.64, "Thessalonica", 1], [22.20, 40.52, "Berea", 0], [23.73, 37.98, "Athens", 1], [22.88, 37.91, "Corinth", 1], [27.34, 37.94, "Ephesus", 1], [34.89, 32.50, "Caesarea", 0], [35.23, 31.78, "Jerusalem", 1], [36.16, 36.20]] },
      { name: "Third journey · AD 53–57", pts: [[36.16, 36.20], [33.3, 37.6], [30.5, 38.4], [27.34, 37.94], [26.16, 39.75], [24.29, 41.01], [22.88, 37.91], [24.29, 41.01], [26.16, 39.75], [27.28, 37.53, "Miletus", 1], [28.22, 36.44, "Rhodes", 0], [29.32, 36.26, "Patara", 0], [35.20, 33.27, "Tyre", 1], [34.89, 32.50], [35.23, 31.78]] },
      { name: "To Rome · AD 59–60", pts: [[34.89, 32.50, "Caesarea", 1], [35.37, 33.56, "Sidon", 0], [33.2, 34.9], [29.98, 36.26, "Myra", 1], [27.5, 36.3], [24.78, 34.93, "Fair Havens", 1], [20.5, 35.2], [14.40, 35.90, "Malta", 1], [15.29, 37.07, "Syracuse", 0], [15.65, 38.11, "Rhegium", 0], [14.12, 40.82, "Puteoli", 0], [12.48, 41.89, "Rome", 1]] }
    ],
    marks: []
  }
};

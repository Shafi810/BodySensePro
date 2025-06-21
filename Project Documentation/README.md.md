
# 💪 BodySense Pro — BMI Calculator

**BodySense Pro** is a stylish and responsive Body Mass Index calculator made with **HTML, CSS, JavaScript**, and **Font Awesome**. It helps users check their BMI and instantly understand their weight category with smooth animations, smart alerts, and even sound feedback for critical states.

## 🚀 Features

### 🎯 1. Smart BMI Calculation
- Calculates BMI using:  
  `BMI = weight (kg) / (height (m)^2)`
- Takes height in **centimeters** and weight in **kilograms**

### 🎭 2. Visual Animations (Pure CSS)
Each result message slides and flips smoothly to grab user attention:

| Animation Class           | Description                                      |
|---------------------------|--------------------------------------------------|
| `zoom-in-bottom-up`       | Flips the form from **bottom up** on load       |
| `flip-box-init` & `show`  | Adds dramatic **Y-axis rotation** on content    |
| `zoom-in-left`            | Left side rotation used for underweight alerts  |
| `zoom-in-text-right`      | Text flips in from right for normal results     |

### 🔊 3. Audio Alert for Overweight
- A **siren sound** plays if BMI > 24.9
- Adds urgency and awareness for users to take care of their health

### ⏱️ 4. Timed Message Display
- All messages auto-hide after a set duration:
  - Underweight/Normal: **3.5 seconds**
  - Overweight: **9 seconds**
- Form also resets automatically after the message

### ✨ 5. Auto Form Reset
- Once the BMI result is shown and message duration ends, the form clears without refresh

## 📦 Tech Stack

| Tech         | Usage                        |
|--------------|------------------------------|
| **HTML5**    | Semantic form & layout       |
| **CSS3**     | Custom animations & styling  |
| **JavaScript** | BMI logic, message control, audio |
| **Font Awesome** | Icons for alerts & messages |

## 📌 How It Works (Quick Overview)

1. User inputs **Height (cm)** and **Weight (kg)**
2. App calculates BMI using JavaScript
3. According to result:
   - Shows styled message with icon & animation
   - Plays sound if overweight
4. Auto-reset & message timeout for better UX

## 🧪 Categories

| Category        | Range           | Message           | Style        |
|------------------|------------------|--------------------|--------------|
| Underweight       | < 18.6            | You are underweight | Green alert  |
| Normal Weight     | 18.6 - 24.9       | You're in a healthy range | Yellow box |
| Overweight        | > 24.9            | You are overweight | Red alert + Siren |

## ✍️ Author

**Made with ❤️ by Shafi usmani / Code hub**  
Feel free to use, improve or share!

## ⚠️ License

This project is open-source and free to use for personal or educational purposes.

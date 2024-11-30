// Setting up the canvas
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Setting canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Utility functions
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function generateRandomColor() {
  return `rgb(${Math.floor(getRandomInRange(0, 256))}, ${Math.floor(getRandomInRange(0, 256))}, ${Math.floor(getRandomInRange(0, 256))})`;
}

// Ball class
class MovingBall {
  constructor(x, y, velocityX, velocityY, radius, color) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = radius;
    this.color = color;
  }

  render() {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }

  move() {
    if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
      this.velocityX *= -1;
    }

    if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
      this.velocityY *= -1;
    }

    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  checkCollision(otherBalls) {
    for (let other of otherBalls) {
      if (this === other) continue;

      const distance = Math.hypot(this.x - other.x, this.y - other.y);
      if (distance < this.radius + other.radius) {
        this.color = other.color = generateRandomColor();
      }
    }
  }
}

// Initialize balls
const ballArray = [];
const ballCount = 25;

while (ballArray.length < ballCount) {
  const radius = getRandomInRange(10, 20);
  const newBall = new MovingBall(
    getRandomInRange(radius, canvasWidth - radius),
    getRandomInRange(radius, canvasHeight - radius),
    getRandomInRange(-5, 5),
    getRandomInRange(-5, 5),
    radius,
    generateRandomColor()
  );

  ballArray.push(newBall);
}

// Animation loop
function animate() {
  context.fillStyle = 'rgba(0, 0, 0, 0.3)';
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  for (let ball of ballArray) {
    ball.render();
    ball.move();
    ball.checkCollision(ballArray);
  }

  requestAnimationFrame(animate);
}

animate();

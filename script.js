let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-70px";
    }

    if (currentScrollPos > 100) {
        footer.style.bottom = "0";
    } else {
        footer.style.bottom = "-60px";
    }

    prevScrollpos = currentScrollPos;
};
document.addEventListener("DOMContentLoaded", function () {
    const members = document.querySelectorAll(".member");

    members.forEach(member => {
        member.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
function showService(service) {
    const serviceImage = document.getElementById("service-image");
    const serviceDescription = document.getElementById("service-description");
    const serviceDetails = document.getElementById("service-details");

    let serviceData = {
        cbt: {
            image: "cbt.png",
            description: "Cognitive Behavioral Therapy (CBT) is a structured, goal-oriented therapy that helps individuals change negative thought patterns to improve mental well-being.Effective treatment with CBT works to help people to see the relationship between their thoughts, feelings and beliefs and their behaviors, especially the behaviors that follow those thought patterns."
        },
        architectural: {
            image: "architecturaldrafting.jpg",
            description: "Architectural designing involves creating unique concepts through precise drafting in AutoCAD. It includes transforming outlines into 2D drawings, converting them into 3D models, and producing fabrication drawings. Software like AutoCAD, Revit, Mapper, and 3ds Max enhances accuracy and visualization in the design process."
        },
        investment: {
            image: "investment.webp",
            description: "Investment Advice helps individuals and businesses make informed financial decisions for long-term growth and wealth management. For successful long-term investments, leveraging expert insights and thorough quantitative and qualitative analysis is essential. Evaluating opportunities strategically helps maximize returns and minimize risks, ensuring sustainable growth in ROI."
        },
        graphics: {
            image: "webdesign.jpg",
            description: "Graphics and Web Development involve designing visually engaging content and building user-friendly websites. It includes creating high-quality digital media, developing and maintaining professional websites, and integrating web technologies to meet organizational needs.."
        },
        healthcare: {
            image: "healthcare.jpeg",
            description: "Healthcare consultants offer expert guidance on medical practices, hospital management, and patient care optimization. They help improve operational efficiency, regulatory compliance, and overall healthcare quality to enhance patient outcomes.."
        }
    };

    // Update content
    serviceImage.src = serviceData[service].image;
    serviceDescription.textContent = serviceData[service].description;

    // Show the details section
    serviceDetails.style.display = "flex";
}
// Function to toggle chatbot visibility
function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "flex" : "none";
}

// Function to send a message
function sendMessage() {
    var input = document.getElementById("chat-input");
    var chatBody = document.getElementById("chat-body");

    if (input.value.trim() === "") return;

    // User Message
    var userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = input.value;
    chatBody.appendChild(userMessage);

    // Bot Reply
    var botMessage = document.createElement("p");
    botMessage.className = "bot-message";
    botMessage.textContent = getBotReply(input.value);
    chatBody.appendChild(botMessage);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Simple Bot Responses
function getBotReply(message) {
    message = message.toLowerCase();
    if (message.includes("hello")) return "Hi there! 😊";
    if (message.includes("services")) return "We offer CBT, Investment Advice, Web Development & more!";
    if (message.includes("help")) return "Sure! How can I assist you?";
    return "Sorry, I don't understand. Can you ask in a different way?";
}

const updateDate = () => {
const dateElement = document.getElementById("date");
const currentDate = new Date();
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const dateString = currentDate.toLocaleDateString(undefined, options).replace(/\//g, '-');
dateElement.textContent = dateString;
};
updateDate();

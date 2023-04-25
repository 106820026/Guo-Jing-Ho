const navbar = document.querySelector('body .navbar')
navbar.classList.add('shrink')

const centerText = document.querySelector('span.center')
const leftArrow = document.querySelector('i.fa-left-long')
const leftText = document.querySelector('span.left')
const rightArrow = document.querySelector('i.fa-right-long')
const rightText = document.querySelector('span.right')

leftArrow.addEventListener('mouseover', () => {
    leftText.style.opacity = 1
    leftText.style.transition = 'opacity 0.5s ease'
})
leftArrow.addEventListener('mouseout', () => {
    leftText.style.opacity = 0.5
    leftText.style.transition = 'none'
})
leftArrow.addEventListener('click', () => {
    // text change
    const centerBuffer = centerText.textContent
    centerText.innerHTML = leftText.textContent
    const leftBuffer = leftText.textContent
    leftText.innerHTML = rightText.textContent
    rightText.innerHTML = centerBuffer
    // content change (center)
    const centerContent = document.querySelector('.hobbies.'+ centerBuffer)
    centerContent.classList.toggle('open')
    // content change (left)
    const leftcontent = document.querySelector('.hobbies.'+ leftBuffer)
    leftcontent.classList.toggle('open')
    // background change
    document.querySelector('main').style.backgroundImage = 'url(./image/' + centerText.innerHTML + 
    '/' + centerText.innerHTML + 'Background.jpg)'
})

rightArrow.addEventListener('mouseover', () => {
    rightText.style.opacity = 1
    rightText.style.transition = 'opacity 0.5s ease'
})
rightArrow.addEventListener('mouseout', () => {
    rightText.style.opacity = 0.5
    rightText.style.transition = 'none'
})

rightArrow.addEventListener('click', () => {
    const centerBuffer = centerText.textContent
    centerText.innerHTML = rightText.textContent
    const rightBuffer = rightText.textContent
    rightText.innerHTML = leftText.innerHTML
    leftText.innerHTML = centerBuffer
    // content change (center)
    const centerContent = document.querySelector('.hobbies.'+ centerBuffer)
    centerContent.classList.toggle('open')
    // content change (right)
    const rightcontent = document.querySelector('.hobbies.'+ rightBuffer)
    rightcontent.classList.toggle('open')
    // background change
    document.querySelector('main').style.backgroundImage = 'url(./image/' + centerText.innerHTML + 
    '/' + centerText.innerHTML + 'Background.jpg)'
})
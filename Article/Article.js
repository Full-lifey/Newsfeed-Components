// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set reference to read button
    this.readButton = domElement.querySelector('.readButton')
    // Set the text on the read button to say 'Mark as Read'
    this.readButton.textContent = 'Mark as Read'
    // Set a click handler on readButton, hiding the article.
    this.readButton.addEventListener('click', event => {
      // this.domElement.style.display = 'none'
      TweenMax.to(this.domElement, 1, {opacity: '0'})
      TweenMax.to(this.domElement, 0, {display:'none', delay:1})
    })
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())
    // console.log(this.domElement, this.expandButton)
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle('article-open')
    if (this.expandButton.textContent === 'Click to Expand'){
      TweenMax.to(this.domElement, 1, {maxHeight:600})
      this.expandButton.textContent = 'Click to Close'
    } else if (this.expandButton.textContent === 'Click to Close'){
      TweenMax.to(this.domElement, 1, {maxHeight:50})
      this.expandButton.textContent = 'Click to Expand'
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  const articleInstance = new Article(article)
})
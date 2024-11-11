document.getElementById('add-bookmark').addEventListener('click', addBookmark);

function addBookmark() {
 const websiteName = document.getElementById('website-name').value;
 const websiteURL = document.getElementById('website-url').value;

 if (!websiteName || !websiteURL) {
 alert('Please enter both the website name and URL.');
 return;
 }

 const bookmarksList = document.querySelector('.bookmarks-list');

 const bookmarkDiv = document.createElement('div');
 bookmarkDiv.classList.add('bookmark');

 bookmarkDiv.innerHTML = `
<a href="${websiteURL}" target="_blank">${websiteName}</a>
 <div class="bookmark-actions">
<i class="fas fa-edit edit"></i>
 <i class="fas fa-trash delete"></i>
 </div>
 `;

 bookmarksList.appendChild(bookmarkDiv);

 document.getElementById('website-name').value = '';
 document.getElementById('website-url').value = '';


 bookmarkDiv.querySelector('.delete').addEventListener('click', () => {
  bookmarksList.removeChild(bookmarkDiv);
});

 bookmarkDiv.querySelector('.edit').addEventListener('click', () => {
 document.getElementById('website-name').value = websiteName;
 document.getElementById('website-url').value = websiteURL;
 bookmarksList.removeChild(bookmarkDiv);
 });
}
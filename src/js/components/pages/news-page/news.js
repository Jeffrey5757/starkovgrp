import makeRequest from 'common/make-request';
import serializeObject from 'common/serialize';

const productsSection = document.querySelector('.news');
let card = document.querySelectorAll('.news-card');

if (productsSection) {
    const productsList = productsSection.querySelector('.page-news__wrap');
    const yearSelected = productsSection.querySelector('.select-year-of');
    const searchForm = productsSection.querySelector('.post-search');

    let data = {
        'action' : 'get_articles',
        'year' : '',
        'content' : '',
    }

    const initCatalog = () => {
        const year = yearSelected.querySelector('.my-select-header__selected');
        const content = searchForm.querySelector('input').value;
        data.year = year.dataset.productsTerm;
        data.content = content;
        requestsArticle(serializeObject(data));
    }

    const renderArticle = (data) => {
        productsList.innerHTML = '';
        productsList.innerHTML = data;
    }

    const requestsArticle = async (data) => {
        const response = await makeRequest('POST', window.ajaxUrl, data, true);
        renderArticle(response);
    };

    initCatalog();

    yearSelected.addEventListener('selected', (evt) => {
        evt.preventDefault();
        data.year = evt.target.querySelector('.my-select-header__selected').value;
        requestsArticle(serializeObject(data));
    });
    searchForm.addEventListener('change', (evt) => {
        evt.preventDefault();
        data.content = evt.target.value;
        requestsArticle(serializeObject(data));
    });
}
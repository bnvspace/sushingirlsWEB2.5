const translations = {
    en: {
        'about': 'About the Project',
        'about-title': 'About the Project',
        'about-desc': 'Sushi and Girls is a cryptocurrency for geeks and cyberpunk aesthetic lovers. We are an STO token created by Ruslan Sokolovsky at Gazpamp, eventually passed to the community for further development.',
        'tokenomics': 'Tokenomics',
        'tokenomics-title': 'Tokenomics',
        'tokenomics-desc': 'Total token issuance: 1,000,000,000<br>Burned coins: 42.3M<br>Treasury: 3 tons, 20,000,000 $SNG',
        'roadmap': 'Roadmap',
        'roadmap-title': 'Roadmap',
        'roadmap-q3': 'Q3 2024: Listing on Dedust, Stonfi, ChatWalletBot, Game, NFT',
        'roadmap-q4-partnerships': 'Q4 2024: Partnerships with projects',
        'roadmap-q4-nft': 'Q4 2024: Launch of NFT collection',
        'contacts': 'Contacts',
        'contacts-title': 'Contacts',
        'contacts-desc': 'Follow us on social media: <a href="https://x.com/sushiandgirls?s=21" class="social">Twitter</a>, <a href="https://t.me/sushingirls" class="social">Telegram</a>',
        'contacts-email': 'Contact us: <a href="mailto:sushi.n.girls@gmail.com" class="social">sushi.n.girls@gmail.com</a>',
        'contacts-links': 'Useful links: <a href="https://www.dextools.io/app/en/ton/pair-explorer/EQBQsgdbqZnCdXWCiTh676bwMtlrx-j4Ky81yHFce-oIiVvA" class="social" target="_blank">DexTools</a>, <a href="https://www.geckoterminal.com/ru/ton/pools/EQBQsgdbqZnCdXWCiTh676bwMtlrx-j4Ky81yHFce-oIiVvA" class="social" target="_blank">GeckoTerminal</a>, <a href="https://dexscreener.com/ton/eqbqsgdbqzncdxwcith676bwmtlrx-j4ky81yhfce-oiivva" class="social" target="_blank">DexScreener</a>',
        'contacts-contract': 'Token contract address: <strong>EQBSVKw3FK2o_aFJyMbdddTDQKLgvobVIzLwx8o9TwoksuK</strong>',
        'hero': 'Welcome to the STO Community Sushi and Girls',
        'hero-desc': 'STO token in a cyberpunk style with pixel aesthetics inspired by the genius phrase about girls and sushi.',
        'hero-btn': 'Learn more'
    },
    ru: {
        'about': 'О проекте',
        'about-title': 'О проекте',
        'about-desc': 'Sushi and Girls — это криптовалюта для гиков и любителей киберпанк-эстетики. Мы СТО токен созданный Русланом Соколовским на газпампе и в итоге перешедший в комьюнити, которое развивает его своими силами.',
        'tokenomics': 'Токеномика',
        'tokenomics-title': 'Токеномика',
        'tokenomics-desc': 'Общая эмиссия токенов: 1 000 000 000<br>Количество сожженых монет: 42.3M<br>Трежери: 3 ton 20 000 000 $SNG',
        'roadmap': 'Роадмап',
        'roadmap-title': 'Роадмап',
        'roadmap-q3': 'Q3 2024: Листинг на Dedust, Stonfi, ChatWalletBot, Game, NFT',
        'roadmap-q4-partnerships': 'Q4 2024: Партнерства с проектами',
        'roadmap-q4-nft': 'Q4 2024: Запуск NFT-коллекции',
        'contacts': 'Контакты',
        'contacts-title': 'Контакты',
        'contacts-desc': 'Следите за нами в соцсетях: <a href="https://x.com/sushiandgirls?s=21" class="social">Twitter</a>, <a href="https://t.me/sushingirls" class="social">Telegram</a>',
        'contacts-email': 'Обратная связь: <a href="mailto:sushi.n.girls@gmail.com" class="social">sushi.n.girls@gmail.com</a>',
        'contacts-links': 'Полезные ссылки: <a href="https://www.dextools.io/app/en/ton/pair-explorer/EQBQsgdbqZnCdXWCiTh676bwMtlrx-j4Ky81yHFce-oIiVvA" class="social" target="_blank">DexTools</a>, <a href="https://www.geckoterminal.com/ru/ton/pools/EQBQsgdbqZnCdXWCiTh676bwMtlrx-j4Ky81yHFce-oIiVvA" class="social" target="_blank">GeckoTerminal</a>, <a href="https://dexscreener.com/ton/eqbqsgdbqzncdxwcith676bwmtlrx-j4ky81yhfce-oiivva" class="social" target="_blank">DexScreener</a>',
        'contacts-contract': 'Адрес контракта токена: <strong>EQBSVKw3FK2o_aFJyMbdddTDQKLgvobVIzLwx8o9TwoksuK</strong>',
        'hero': 'Добро пожаловать в СТО Community Sushi and Girls',
        'hero-desc': 'СТО токен в стилистике киберпанка и пиксельной эстетикой вдохновленный фразой гения про девочек и суши.',
        'hero-btn': 'Узнать больше'
    }
};

// переключение языков
function switchLanguage(lang) {
    document.querySelectorAll('.lang').forEach(el => {
        const section = el.getAttribute('data-section');
        if (translations[lang][section]) {
            el.innerHTML = translations[lang][section];
        }
    });
}

// Обработчики
document.getElementById('switchToRu').addEventListener('click', () => switchLanguage('ru'));
document.getElementById('switchToEn').addEventListener('click', () => switchLanguage('en'));

// прокрутка наверх при нажатии на лого
document.getElementById('logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


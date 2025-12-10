// Search Functionality

class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.converterCards = document.querySelectorAll('.converter-card');
        this.converterGrid = document.getElementById('converterGrid');
        
        this.converterData = this.buildConverterIndex();
        this.initEventListeners();
    }
    
    buildConverterIndex() {
        const index = [];
        this.converterCards.forEach(card => {
            const converter = card.dataset.converter;
            const keywords = card.dataset.keywords || '';
            const title = card.querySelector('h4').textContent;
            const description = card.querySelector('p').textContent;
            
            index.push({
                element: card,
                converter: converter,
                title: title,
                description: description,
                keywords: keywords.toLowerCase(),
                searchText: `${title} ${description} ${keywords}`.toLowerCase()
            });
        });
        return index;
    }
    
    initEventListeners() {
        // Debounced search input
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 200);
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
                this.hideSearchResults();
            }
        });
        
        // Focus on search with keyboard shortcut (Ctrl/Cmd + K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.searchInput.focus();
            }
            
            // Escape to clear search
            if (e.key === 'Escape' && document.activeElement === this.searchInput) {
                this.searchInput.value = '';
                this.hideSearchResults();
                this.showAllConverters();
            }
        });
        
        // Show search results when input is focused and has value
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim()) {
                this.performSearch(this.searchInput.value);
            }
        });
    }
    
    performSearch(query) {
        const trimmedQuery = query.trim().toLowerCase();
        
        if (!trimmedQuery) {
            this.hideSearchResults();
            this.showAllConverters();
            return;
        }
        
        // Find matching converters
        const matches = this.converterData.filter(item => 
            item.searchText.includes(trimmedQuery)
        );
        
        // Show search results dropdown
        if (matches.length > 0) {
            this.displaySearchResults(matches, trimmedQuery);
        } else {
            this.displayNoResults();
        }
        
        // Filter visible converters in the grid
        this.filterConverterGrid(matches);
    }
    
    displaySearchResults(matches, query) {
        this.searchResults.innerHTML = '';
        
        matches.forEach(match => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            const icon = match.element.querySelector('.card-icon').textContent;
            const highlightedTitle = this.highlightMatch(match.title, query);
            const highlightedDesc = this.highlightMatch(match.description, query);
            
            resultItem.innerHTML = `
                <div class="result-title">${icon} ${highlightedTitle}</div>
                <div class="result-description">${highlightedDesc}</div>
            `;
            
            resultItem.addEventListener('click', () => {
                match.element.click();
                this.hideSearchResults();
            });
            
            this.searchResults.appendChild(resultItem);
        });
        
        this.searchResults.classList.add('active');
    }
    
    displayNoResults() {
        this.searchResults.innerHTML = `
            <div class="search-result-item" style="pointer-events: none;">
                <div class="result-title">No converters found</div>
                <div class="result-description">Try a different search term</div>
            </div>
        `;
        this.searchResults.classList.add('active');
    }
    
    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    filterConverterGrid(matches) {
        this.converterCards.forEach(card => {
            const isMatch = matches.some(match => match.element === card);
            card.style.display = isMatch ? 'block' : 'none';
        });
    }
    
    showAllConverters() {
        this.converterCards.forEach(card => {
            card.style.display = 'block';
        });
    }
    
    hideSearchResults() {
        this.searchResults.classList.remove('active');
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SearchManager();
});

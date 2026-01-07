// HEDAMO Product Disclosure System - Cognitive Load Optimized
// Principles applied: Progressive Disclosure, Chunking, Scanning Optimization

// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Plant-Based Protein Blend",
        category: "Food & Nutrition",
        producer: "GreenCore Nutrition Pvt. Ltd.",
        description: "High-quality plant-based protein blend made from peas, rice, and hemp. Suitable for vegans and athletes.",
        status: "published",
        lastUpdated: "2025-01-12",
        declaredBy: "GreenCore Nutrition Pvt. Ltd.",
        declarationDate: "2025-01-12",
        evidenceCount: 2,
        evidenceTypes: ["Lab Analysis", "Certifications"],
        complianceScore: 95,
        versions: [
            { version: "2.0", status: "published", date: "2025-01-12", changes: "Added new lab test results" },
            { version: "1.0", status: "submitted", date: "2026-01-05", changes: "Initial submission" }
        ],
        certifications: ["Non-GMO", "Vegan Certified"],
        ingredients: ["Pea Protein", "Rice Protein", "Hemp Protein", "Natural Flavors"]
    },
    {
        id: 2,
        name: "Reusable Surgical Mask",
        category: "Healthcare",
        producer: "Meditex Supplies",
        description: "Medical-grade reusable surgical mask with 5-layer filtration system. Washable up to 50 times.",
        status: "submitted",
        lastUpdated: "2025-01-05",
        declaredBy: "Meditex Supplies",
        declarationDate: "2025-01-05",
        evidenceCount: 1,
        evidenceTypes: ["Quality Test Reports"],
        complianceScore: 88,
        versions: [
            { version: "1.2", status: "submitted", date: "2025-01-05", changes: "Updated filtration efficiency data" },
            { version: "1.1", status: "draft", date: "2025-12-28", changes: "Added wash cycle testing" },
            { version: "1.0", status: "draft", date: "2025-12-15", changes: "Initial draft" }
        ],
        certifications: ["FDA Registered", "CE Marked"],
        materials: ["Meltblown PP", "Non-woven Fabric", "Elastic Bands"]
    },
    {
        id: 3,
        name: "Smart Air Quality Sensor",
        category: "Electronics",
        producer: "EnviroSense Technologies",
        description: "IoT-enabled air quality sensor measuring PM2.5, CO2, temperature, and humidity. Real-time monitoring via mobile app.",
        status: "draft",
        lastUpdated: "2025-12-28",
        declaredBy: "EnviroSense Technologies",
        declarationDate: "2025-12-28",
        evidenceCount: 0,
        evidenceTypes: [],
        complianceScore: 65,
        versions: [
            { version: "0.9", status: "draft", date: "2025-12-28", changes: "Added component specifications" },
            { version: "0.8", status: "draft", date: "2025-12-20", changes: "Initial technical documentation" }
        ],
        certifications: ["RoHS Compliant"],
        components: ["PM2.5 Sensor", "CO2 Sensor", "Wi-Fi Module", "LCD Display"]
    },
    {
        id: 4,
        name: "Recycled Packaging Film",
        category: "Sustainable Materials",
        producer: "EcoWrap Industries",
        description: "100% post-consumer recycled plastic packaging film. Reduces carbon footprint by 60% compared to virgin plastic.",
        status: "published",
        lastUpdated: "2025-01-10",
        declaredBy: "EcoWrap Industries",
        declarationDate: "2025-01-10",
        evidenceCount: 3,
        evidenceTypes: ["Life Cycle Assessment", "Recycled Content Cert", "Mechanical Tests"],
        complianceScore: 92,
        versions: [
            { version: "3.1", status: "published", date: "2025-01-10", changes: "Updated LCA data" },
            { version: "3.0", status: "published", date: "2025-01-03", changes: "Added new certification" },
            { version: "2.0", status: "submitted", date: "2025-12-20", changes: "Expanded testing parameters" }
        ],
        certifications: ["100% PCR", "Recyclable", "Carbon Neutral"],
        composition: ["100% Post-Consumer Recycled PET", "No additives"]
    },
    {
        id: 5,
        name: "Organic Herbal Tea Blend",
        category: "Food & Nutrition",
        producer: "PureLeaf Organics",
        description: "Certified organic herbal tea blend with chamomile, peppermint, and lemongrass. No additives or preservatives.",
        status: "published",
        lastUpdated: "2025-01-08",
        declaredBy: "PureLeaf Organics",
        declarationDate: "2025-01-08",
        evidenceCount: 2,
        evidenceTypes: ["Organic Certification", "Pesticide Test"],
        complianceScore: 98,
        versions: [
            { version: "2.2", status: "published", date: "2025-01-08", changes: "Updated organic certificate" },
            { version: "2.1", status: "published", date: "2025-12-15", changes: "Added new flavor variant" }
        ],
        certifications: ["USDA Organic", "Fair Trade"],
        ingredients: ["Organic Chamomile", "Organic Peppermint", "Organic Lemongrass"]
    },
    {
        id: 6,
        name: "Portable ECG Monitor",
        category: "Healthcare",
        producer: "CardioTech Solutions",
        description: "Compact, portable ECG monitor for home use. FDA-cleared for personal health monitoring.",
        status: "submitted",
        lastUpdated: "2025-01-03",
        declaredBy: "CardioTech Solutions",
        declarationDate: "2025-01-03",
        evidenceCount: 3,
        evidenceTypes: ["FDA Clearance", "Clinical Trials", "Safety Tests"],
        complianceScore: 91,
        versions: [
            { version: "1.5", status: "submitted", date: "2025-01-03", changes: "Submitted clinical trial data" },
            { version: "1.4", status: "draft", date: "2025-12-25", changes: "Added user manual" }
        ],
        certifications: ["FDA 510(k) Cleared", "CE Medical"],
        features: ["6-lead ECG", "Bluetooth Connectivity", "30-day Battery"]
    }
];

// ===== STATE MANAGEMENT =====
const state = {
    currentStatus: 'all',
    currentView: 'grid',
    currentSort: 'name-asc',
    currentCategory: 'all',
    searchQuery: '',
    filteredProducts: [...products]
};

// ===== DOM ELEMENTS =====
const elements = {
    listView: document.getElementById('listView'),
    detailView: document.getElementById('detailView'),
    productsContainer: document.getElementById('productsContainer'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    sortSelect: document.getElementById('sortSelect'),
    clearSearch: document.getElementById('clearSearch'),
    loadingState: document.getElementById('loadingState'),
    emptyState: document.getElementById('emptyState'),
    resultsCount: document.getElementById('resultsCount'),
    totalProducts: document.getElementById('totalProducts'),
    publishedCount: document.getElementById('publishedCount'),
    lastUpdated: document.getElementById('lastUpdated')
};

// ===== UTILITY FUNCTIONS =====
// Format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    });
}

// Get status display properties
function getStatusInfo(status) {
    const statusMap = {
        published: {
            text: 'Published',
            class: 'status-published',
            icon: 'fas fa-check-circle'
        },
        submitted: {
            text: 'Submitted',
            class: 'status-submitted',
            icon: 'fas fa-paper-plane'
        },
        draft: {
            text: 'Draft',
            class: 'status-draft',
            icon: 'fas fa-edit'
        }
    };
    
    return statusMap[status] || statusMap.draft;
}

// Get compliance score color
function getScoreColor(score) {
    if (score >= 90) return '#28A745';
    if (score >= 75) return '#17A2B8';
    if (score >= 60) return '#FFC107';
    return '#DC3545';
}

// ===== DATA PROCESSING =====
// Count products by status
function countProductsByStatus() {
    const counts = {
        all: products.length,
        published: products.filter(p => p.status === 'published').length,
        submitted: products.filter(p => p.status === 'submitted').length,
        draft: products.filter(p => p.status === 'draft').length
    };
    
    // Update count displays
    document.querySelectorAll('.filter-count').forEach(span => {
        const status = span.id.replace('count-', '');
        span.textContent = counts[status];
    });
    
    // Update header stats
    elements.totalProducts.textContent = counts.all;
    elements.publishedCount.textContent = counts.published;
}

// Filter products based on current state
function filterProducts() {
    let filtered = [...products];
    
    // Apply status filter
    if (state.currentStatus !== 'all') {
        filtered = filtered.filter(p => p.status === state.currentStatus);
    }
    
    // Apply category filter
    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category.includes(state.currentCategory));
    }
    
    // Apply search query
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.producer.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        switch (state.currentSort) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'date-desc':
                return new Date(b.lastUpdated) - new Date(a.lastUpdated);
            case 'status':
                return a.status.localeCompare(b.status);
            default:
                return 0;
        }
    });
    
    state.filteredProducts = filtered;
    return filtered;
}

// ===== RENDERING FUNCTIONS =====
// Render product cards
function renderProducts() {
    const products = filterProducts();
    const container = elements.productsContainer;
    
    // Update results count
    elements.resultsCount.textContent = `${products.length} result${products.length !== 1 ? 's' : ''}`;
    
    // Show/hide empty state
    if (products.length === 0) {
        elements.emptyState.style.display = 'block';
        elements.productsContainer.style.display = 'none';
        return;
    } else {
        elements.emptyState.style.display = 'none';
        elements.productsContainer.style.display = state.currentView === 'grid' ? 'grid' : 'block';
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Add products
    products.forEach(product => {
        const statusInfo = getStatusInfo(product.status);
        
        const card = document.createElement('div');
        card.className = `product-card ${state.currentView === 'list' ? 'list-view' : ''}`;
        card.dataset.id = product.id;
        
        card.innerHTML = `
            <div class="product-header">
                <div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-meta">
                        <div class="meta-item">
                            <i class="fas fa-industry"></i>
                            <span>${product.producer}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-folder"></i>
                            <span>${product.category}</span>
                        </div>
                    </div>
                </div>
                <div class="product-status ${statusInfo.class}">
                    <i class="${statusInfo.icon}"></i>
                    ${statusInfo.text}
                </div>
            </div>
            
            <div class="product-description">
                ${product.description}
            </div>
            
            <div class="product-footer">
                <div class="timestamp">
                    <i class="far fa-clock"></i>
                    Updated ${formatDate(product.lastUpdated)}
                </div>
                <div class="evidence-indicator">
                    <i class="fas fa-paperclip"></i>
                    <span class="evidence-count">${product.evidenceCount}</span>
                    document${product.evidenceCount !== 1 ? 's' : ''}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showProductDetail(product.id));
        container.appendChild(card);
    });
    
    // Apply list view class if needed
    if (state.currentView === 'list') {
        container.classList.add('list-view');
    } else {
        container.classList.remove('list-view');
    }
}

// Show product detail view
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const statusInfo = getStatusInfo(product.status);
    
    elements.detailView.innerHTML = `
        <button class="back-btn" onclick="showListView()">
            <i class="fas fa-arrow-left"></i>
            Back to Products
        </button>
        
        <div class="detail-header">
            <h1 class="detail-title">${product.name}</h1>
            <div class="detail-meta">
                <div class="detail-meta-item">
                    <span class="detail-meta-label">Status</span>
                    <span class="detail-meta-value ${statusInfo.class}">
                        <i class="${statusInfo.icon}"></i>
                        ${statusInfo.text}
                    </span>
                </div>
                <div class="detail-meta-item">
                    <span class="detail-meta-label">Producer</span>
                    <span class="detail-meta-value">${product.producer}</span>
                </div>
                <div class="detail-meta-item">
                    <span class="detail-meta-label">Category</span>
                    <span class="detail-meta-value">${product.category}</span>
                </div>
                <div class="detail-meta-item">
                    <span class="detail-meta-label">Last Updated</span>
                    <span class="detail-meta-value">${formatDate(product.lastUpdated)}</span>
                </div>
            </div>
        </div>
        
        <div class="info-chunk">
            <div class="chunk-header">
                <i class="fas fa-info-circle"></i>
                <h3>Product Description</h3>
            </div>
            <div class="chunk-content">
                <p>${product.description}</p>
            </div>
        </div>
        
        <div class="info-chunk">
            <div class="chunk-header">
                <i class="fas fa-chart-bar"></i>
                <h3>Disclosure Summary</h3>
            </div>
            <div class="chunk-content">
                <div class="summary-grid">
                    <div class="summary-item">
                        <span class="summary-label">Declared By</span>
                        <span class="summary-value">${product.declaredBy}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Declaration Date</span>
                        <span class="summary-value">${formatDate(product.declarationDate)}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Evidence Documents</span>
                        <span class="summary-value">
                            ${product.evidenceCount} ${product.evidenceTypes.length > 0 ? 
                                `(${product.evidenceTypes.join(', ')})` : ''}
                        </span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Compliance Score</span>
                        <span class="summary-value" style="color: ${getScoreColor(product.complianceScore)}">
                            ${product.complianceScore}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        ${product.certifications ? `
        <div class="info-chunk">
            <div class="chunk-header">
                <i class="fas fa-award"></i>
                <h3>Certifications & Standards</h3>
            </div>
            <div class="chunk-content">
                <div class="certifications">
                    ${product.certifications.map(cert => `
                        <span class="cert-badge">${cert}</span>
                    `).join('')}
                </div>
            </div>
        </div>
        ` : ''}
        
        <div class="info-chunk">
            <div class="chunk-header">
                <i class="fas fa-history"></i>
                <h3>Version History</h3>
            </div>
            <div class="chunk-content">
                <div class="version-history">
                    ${product.versions.map(version => {
                        const versionStatus = getStatusInfo(version.status);
                        return `
                        <div class="version-item">
                            <div class="version-status ${versionStatus.class}">
                                ${versionStatus.text}
                            </div>
                            <div class="version-info">
                                <div class="version-number">Version ${version.version}</div>
                                <div class="version-date">${formatDate(version.date)}</div>
                                ${version.changes ? `<div class="version-changes">${version.changes}</div>` : ''}
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
        
        <div class="disclaimer-box">
            <div class="disclaimer-header">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Important Notice</h3>
            </div>
            <div class="disclaimer-content">
                This page presents producer-declared information for transparency purposes only. 
                It does not constitute certification, verification, or endorsement by HEDAMO. 
                Users should verify information independently before making decisions.
            </div>
        </div>
    `;
    
    // Add CSS for cert badges
    const style = document.createElement('style');
    style.textContent = `
        .cert-badge {
            display: inline-block;
            background-color: var(--primary-blue-light);
            color: var(--primary-blue);
            padding: var(--space-xs) var(--space-md);
            border-radius: var(--radius-sm);
            font-size: 12px;
            font-weight: 500;
            margin: var(--space-xs);
            border: 1px solid var(--border-light);
        }
        
        .version-changes {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: var(--space-xs);
            font-style: italic;
        }
    `;
    elements.detailView.appendChild(style);
    
    // Switch views
    elements.listView.style.display = 'none';
    elements.detailView.style.display = 'block';
}

// Show list view
function showListView() {
    elements.listView.style.display = 'block';
    elements.detailView.style.display = 'none';
}

// Simulate loading
function simulateLoading() {
    elements.loadingState.style.display = 'flex';
    elements.productsContainer.style.display = 'none';
    
    setTimeout(() => {
        elements.loadingState.style.display = 'none';
        renderProducts();
    }, 500);
}

// ===== EVENT HANDLERS =====
// Update status filter
function updateStatusFilter(status) {
    state.currentStatus = status;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.status === status) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    simulateLoading();
}

// Update view mode
function updateViewMode(mode) {
    state.currentView = mode;
    
    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => {
        if (btn.dataset.view === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderProducts();
}

// ===== INITIALIZATION =====
function init() {
    // Set last updated date
    const today = new Date();
    elements.lastUpdated.textContent = today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Count products by status
    countProductsByStatus();
    
    // Initial render
    simulateLoading();
    
    // Event listeners
    elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        simulateLoading();
    });
    
    elements.clearSearch.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        simulateLoading();
    });
    
    elements.categoryFilter.addEventListener('change', (e) => {
        state.currentCategory = e.target.value;
        simulateLoading();
    });
    
    elements.sortSelect.addEventListener('change', (e) => {
        state.currentSort = e.target.value;
        simulateLoading();
    });
    
    // Status filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateStatusFilter(btn.dataset.status);
        });
    });
    
    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateViewMode(btn.dataset.view);
        });
    });
    
    // Keyboard shortcuts for better accessibility
    document.addEventListener('keydown', (e) => {
        // ESC key to go back from detail view
        if (e.key === 'Escape' && elements.detailView.style.display !== 'none') {
            showListView();
        }
        
        // Focus search with Ctrl+K or Cmd+K
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            elements.searchInput.focus();
        }
    });
    
    // Initialize view mode
    updateViewMode('grid');
}

// ===== START APPLICATION =====
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally
window.showListView = showListView;
window.showProductDetail = showProductDetail;
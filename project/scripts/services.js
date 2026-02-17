document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            id: 'predictive',
            title: 'Predictive Analytics',
            description: 'Forecast future trends, customer behaviors, and market dynamics using advanced statistical algorithms and machine learning.',
            icon: '📈'
        },
        {
            id: 'mining',
            title: 'Data Mining',
            description: 'Extract valuable information from large datasets to discover hidden patterns, correlations, and anomalies.',
            icon: '⛏️'
        },
        {
            id: 'bi',
            title: 'Business Intelligence',
            description: 'Transform raw data into meaningful and useful information for business analysis purposes through interactive dashboards.',
            icon: '📊'
        },
        {
            id: 'consulting',
            title: 'Strategy Consulting',
            description: 'Expert guidance on how to leverage data to drive business growth and operational efficiency.',
            icon: '🤝'
        },
        {
            id: 'warehousing',
            title: 'Data Warehousing',
            description: 'Secure, scalable storage solutions ensuring your data is accessible, reliable, and ready for analysis.',
            icon: '🗄️'
        },
        {
            id: 'visualization',
            title: 'Data Visualization',
            description: 'Compelling visual representations of your data to communicate complex insights clearly and effectively.',
            icon: '👁️'
        }
    ];

    const container = document.getElementById('services-container');

    if (container) {
        // Use map to create an array of HTML strings, then join them
        const servicesHTML = services.map(service => `
            <div class="service-card" id="${service.id}">
                <div style="font-size: 3rem; margin-bottom: 1rem;">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');

        container.innerHTML = servicesHTML;
    }
});

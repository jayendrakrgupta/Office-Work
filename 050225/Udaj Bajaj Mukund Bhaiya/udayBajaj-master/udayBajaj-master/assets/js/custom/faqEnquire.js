document.addEventListener('DOMContentLoaded', () => {
    const faqWrappers = document.querySelectorAll('.faqWrapper');
    
    // Function to close all FAQ items
    const closeAllFaqs = () => {
        faqWrappers.forEach(wrapper => {
            const answer = wrapper.querySelector('.answer');
            const question = wrapper.querySelector('.question, .questionOpened');
            const plus = wrapper.querySelector('.plus');
            const minus = wrapper.querySelector('.minus');
            
            if (answer) {
                answer.style.maxHeight = '0';
                answer.style.marginTop = '0';
                answer.style.opacity = '0';
            }
            question.className = 'question';
            plus.style.display = 'block';
            minus.style.display = 'none';
        });
    };

    // Initialize FAQ states
    faqWrappers.forEach(wrapper => {
        const answer = wrapper.querySelector('.answer');
        const plus = wrapper.querySelector('.plus');
        const minus = wrapper.querySelector('.minus');

        // Set initial states
        if (answer) {
            answer.style.maxHeight = '0';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'all 0.3s ease-out';
            answer.style.opacity = '0';
            answer.style.marginTop = '0';
        }
        minus.style.display = 'none';
    });

    // Add click event listeners
    faqWrappers.forEach(wrapper => {
        const questionDiv = wrapper.querySelector('.questionDiv');
        const answer = wrapper.querySelector('.answer');
        const question = wrapper.querySelector('.question, .questionOpened');
        const plus = wrapper.querySelector('.plus');
        const minus = wrapper.querySelector('.minus');

        questionDiv.addEventListener('click', () => {
            const isOpen = answer && answer.style.maxHeight !== '0px';

            // Close all FAQs first
            closeAllFaqs();

            // If this FAQ wasn't open, open it
            if (!isOpen && answer) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.marginTop = '20px';
                answer.style.opacity = '1';
                question.className = 'questionOpened';
                plus.style.display = 'none';
                minus.style.display = 'block';
            }
        });
    });
});
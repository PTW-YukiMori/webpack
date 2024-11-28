export function CreateMaterialDesignButton(textContent, onClick) {
    
    const button = document.createElement('button');

    button.textContent = textContent;

    button.style.all = 'unset';
    button.style.display = 'inline-block';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.fontWeight = 'bold';
    button.style.color = '#FFFFFF';
    button.style.backgroundColor = '#6200EE';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.2)';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s, box-shadow 0.3s';

    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#3700B3';
        button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#6200EE';
        button.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.2)';
    });

    if (typeof onClick === 'function') {
        button.addEventListener('click', onClick);
    }

    return button;
}

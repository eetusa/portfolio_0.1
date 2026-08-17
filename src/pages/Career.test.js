import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Career, { sortCareerItemsNewestFirst } from './Career';

describe('Career', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }));
    });

    afterEach(() => {
        act(() => {
            ReactDOM.unmountComponentAtNode(container);
        });
        container.remove();
    });

    it('sorts a copy of the career items by start date, newest first', () => {
        const items = [
            { id: 'oldest', start: '2021-04-01' },
            { id: 'newest', start: '2024-06-01' },
            { id: 'middle', start: '2022-08-08' },
        ];

        const sortedItems = sortCareerItemsNewestFirst(items);

        expect(sortedItems.map((item) => item.id)).toEqual(['newest', 'middle', 'oldest']);
        expect(items.map((item) => item.id)).toEqual(['oldest', 'newest', 'middle']);
    });

    it('shows the newest item first and changes the highlight when an item is selected', () => {
        act(() => {
            ReactDOM.render(<Career />, container);
        });

        const buttons = container.querySelectorAll('.experience-item');
        const highlightTitle = container.querySelector('.career-showcase-title');
        const highlightCompany = container.querySelector('.career-showcase-company');
        const elinarButton = Array.from(buttons).find((button) => button.textContent.includes('Elinar'));
        const samkButton = Array.from(buttons).find((button) => button.textContent.includes('SAMK'));

        expect(buttons[0].textContent).toContain('SOK');
        expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
        expect(highlightTitle.textContent).toBe('Full-stack Software Developer');

        act(() => {
            elinarButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(elinarButton.getAttribute('aria-pressed')).toBe('true');
        expect(highlightTitle.textContent).toBe('Software Developer');
        expect(highlightCompany.textContent).toBe('Elinar Oy Ltd');
        expect(container.textContent).toContain('authenticated users through ADFS');
        expect(container.textContent).toContain('IBM FileNet');

        act(() => {
            samkButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(samkButton.getAttribute('aria-pressed')).toBe('true');
        expect(highlightTitle.textContent).toBe('Project Researcher');
        expect(highlightCompany.textContent).toContain('SAMK');
        expect(container.textContent).toContain('Designed and built an end-to-end VR motion-data system');
        expect(container.textContent).toContain('PyQt');
    });

    it('moves the mobile viewport to the highlight after a selection', () => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: query === '(max-width: 575.98px)',
            media: query,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }));
        window.requestAnimationFrame = (callback) => callback();
        Element.prototype.scrollIntoView = jest.fn();

        act(() => {
            ReactDOM.render(<Career />, container);
        });

        const buttons = container.querySelectorAll('.experience-item');
        const showcase = container.querySelector('.career-showcase');
        const elinarButton = Array.from(buttons).find((button) => button.textContent.includes('Elinar'));

        act(() => {
            elinarButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(showcase).toBe(document.activeElement);
        expect(showcase.scrollIntoView).toHaveBeenCalledWith({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

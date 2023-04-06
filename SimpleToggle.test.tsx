import { fireEvent, render, screen } from '@testing-library/react';
import { SimpleToggle } from './SimpleToggle';


const renderComponent = () => {
    const args = {}
    return render(
        <SimpleToggle {...args}  />
    );
};

describe('<SimpleToggle />', ()=>{
    it('renders without crashing', ()=>{
        const view = renderComponent();
        expect(view).toMatchSnapshot();
    });

    it('validate Use setting label', ()=>{
        const view = renderComponent();
        let linkElement = screen.getByText('Use setting');
        expect(linkElement).toBeInTheDocument();
    });

    it('validate switch control', ()=>{
        const view = renderComponent();

        let linkElement = screen.getByRole('switch');
        expect(linkElement).toBeInTheDocument();
    });

    it('validate switch control is not checked', ()=>{
        const view = renderComponent();

        let linkElement = screen.getByRole('switch');
        expect(linkElement).not.toBeChecked();
    });

    it('validate switch control is checked', ()=>{
        const view = renderComponent();

        let linkElement = screen.getByRole('switch');
        fireEvent.click(linkElement);
        expect(linkElement).toBeChecked();
    });
})

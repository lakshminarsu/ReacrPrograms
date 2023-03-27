import { fireEvent, render, screen } from '@testing-library/react';
import { Popover } from './popover';

const renderComponent = () => {
    const popOverContent = <h4 className='text-center'>Its popover</h4>;
    const popOverTriggerContent = <h4 className='sectionHeading'>Click here to show popover</h4>;
    return render(
        <Popover children={popOverContent} trigger={popOverTriggerContent} />
    );
};

describe('<Popover />', ()=>{
    it('renders without crashing', ()=>{
        const view = renderComponent();
        expect(view).toMatchSnapshot();
    });

    it('validate trigger content', ()=>{
        const view = renderComponent();
        const linkElement = screen.getByText('Click here to show popover');
        expect(linkElement).toBeInTheDocument();
    });

    it('validate popover content not in the document', async ()=>{
        const view = renderComponent();
        const triggerContent = (screen.getByText('Click here to show popover') as HTMLElement);
    
        const popoverContent = screen.queryByText('Its popover');
        expect(popoverContent).not.toBeInTheDocument();
      
  });

    it('validate trigger content in the document', async ()=>{
          const view = renderComponent();
          const triggerContent = (screen.getByText('Click here to show popover') as HTMLElement);
          fireEvent.click(triggerContent);
          const popoverContent = (screen.getByText('Its popover') as HTMLElement);
          expect(popoverContent).toBeInTheDocument();
        
    });
})
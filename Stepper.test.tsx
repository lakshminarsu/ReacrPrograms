import { fireEvent, render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';
import { Input } from './Input';
import { RadioGroup } from './Radio';
import clsx from "clsx";
import { useState } from 'react';


const simpleRenderComponent = () => {
    const args = {
        stepItems: [
          { name: "Brand", canGoNext: true },
          { name: "Attribute", canGoNext: true },
          { name: "LOA", canGoNext: true },
          { name: "Numbers", canGoNext: true },
          { name: "Review", canGoNext: true },
        ],
        onSubmit: () => alert("Submit"),
      };
    return render(
        <Stepper {...args}>
        <h2 className="text-center">First Brand Step</h2>
        <h4 className="text-center">Second Attributte Step</h4>
        <h4 className="text-center">Third LOA Step</h4>
        <h4 className="text-center">Fourth Numbers Step</h4>
        <h4 className="text-center">Fifth Review Step</h4>
      </Stepper>
    );
};

const formRenderComponent = () => {
    const [selectedGender, setSelectedGender] = useState("male");
    const changeSelected = (value: any): void => {
      setSelectedGender(value);
    };
    const radioGroupItems = [
        { key: "male", name: "Male" },
        { key: "female", name: "Feale" },
        { key: "others", name: "Others" },
      ];

    const  args = {
        stepItems: [
          { name: "First Name", canGoNext: true },
          { name: "Last Name", canGoNext: true },
          { name: "Email", canGoNext: true },
          { name: "Gender", canGoNext: true },
          { name: "Password", canGoNext: true },
        ],
        onSubmit: () => alert("Submit"),
      };
    return render(
        <Stepper {...args}>
        <div>
          <label
            className={clsx("block text-[16px] font-bold tracking-[0.12px]")}
            htmlFor={"name"}
          >
            First Name
            <small className="ml-1">Enter first name here:</small>
          </label>
          <Input
            className="col-span-1 sm:col-span-1"
            defaultValue=""
            id="firstName"
            label="First Name"
            type="text"
          />
        </div>
        <div>
          <label
            className={clsx("block text-[16px] font-bold tracking-[0.12px]")}
            htmlFor={"name"}
          >
            Last Name
            <small className="ml-1">Enter last name here:</small>
          </label>
          <Input
            className="col-span-1 sm:col-span-1"
            defaultValue=""
            id="lastName"
            label="Last Name"
            type="text"
          />
        </div>
        <div>
          <label
            className={clsx("block text-[16px] font-bold tracking-[0.12px]")}
            htmlFor={"name"}
          >
            Email
            <small className="ml-1">Enter email here:</small>
          </label>
          <Input
            className="col-span-1 sm:col-span-1"
            defaultValue=""
            id="email"
            label="Email"
          />
        </div>
        <div>
          <RadioGroup
            changeSelected={changeSelected}
            label="Gender"
            radioGroupItems={radioGroupItems}
            selected={selectedGender}
          />
        </div>
        <div>
          <label
            className={clsx("block text-[16px] font-bold tracking-[0.12px]")}
            htmlFor={"name"}
          >
            Password
            <small className="ml-1">Enter password here:</small>
          </label>
          <Input
            className="col-span-1 sm:col-span-1"
            defaultValue=""
            id="password"
            label="Password"
            type="password"
          />
        </div>
      </Stepper>  
    );
};

describe('<Stepper />', ()=>{
    it('renders without crashing', ()=>{
        const view = simpleRenderComponent();
        expect(view).toMatchSnapshot();
    });

    it('validate elements in stepper', ()=>{
        const view = simpleRenderComponent();
        let linkElement = screen.getByText('Brand');
        expect(linkElement).toBeInTheDocument();

        linkElement = screen.getByText('Attribute');
        expect(linkElement).toBeInTheDocument();

        linkElement = screen.getByText('LOA');
        expect(linkElement).toBeInTheDocument();

        linkElement = screen.getByText('Numbers');
        expect(linkElement).toBeInTheDocument();

        linkElement = screen.getByText('Review');
        expect(linkElement).toBeInTheDocument();

        linkElement = screen.getByText('First Brand Step');
        expect(linkElement).toBeInTheDocument();

        const buttonElement = (screen.getByRole("button") as HTMLElement);
        expect(buttonElement.innerHTML).toBe("Continue");
    });

    it('validate Continue click', ()=>{
        const view = simpleRenderComponent();

        const buttonElement = (screen.getByRole("button") as HTMLElement);
        fireEvent.click(buttonElement);

        let linkElement = screen.getByText('Second Attributte Step');
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(buttonElement);

        linkElement = screen.getByText('Third LOA Step');
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(buttonElement);

        linkElement = screen.getByText('Fourth Numbers Step');
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(buttonElement);

        linkElement = screen.getByText('Fifth Review Step');
        expect(linkElement).toBeInTheDocument();

        expect(buttonElement.innerHTML).toBe("Submit");
    });

    it('validate Go Back click', ()=>{
        const view = simpleRenderComponent();

        const continueButtonElement = (screen.getByRole("button") as HTMLElement);
        fireEvent.click(continueButtonElement);
        fireEvent.click(continueButtonElement);
        fireEvent.click(continueButtonElement);
        fireEvent.click(continueButtonElement);

        let linkElement = screen.getByText('Fifth Review Step');
        expect(linkElement).toBeInTheDocument();

        const newbuttonElement = (screen.getByText('Go Back') as HTMLElement);
        fireEvent.click(newbuttonElement);

        linkElement = screen.getByText('Fourth Numbers Step');
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(newbuttonElement);

        linkElement = screen.getByText('Third LOA Step');
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(newbuttonElement);

        linkElement = screen.getByText('Second Attributte Step');
        expect(linkElement).toBeInTheDocument();
    });

})

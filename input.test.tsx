import { render, screen } from '@testing-library/react';
import { Input } from './Input';

export type InputType = "email" | "password" | "text";
interface InputProps {
    className?: string;
    defaultValue?: string;
    id: string;
    label: string;
    labelDescription?: string;
    placeholder?: string;
    hasError?: boolean;
    readonly?: boolean;
    type?: InputType;
  }

const renderComponent = (args: InputProps) => {
    return render(
            <Input {...args} />     
    );
  };

  describe('<Input />', () => {
    it('renders without crashing', () => {      
        const TextInputField:InputProps = {
        defaultValue: "",
        id: "fullName",
        label: "Full Name",
        labelDescription: "Enter full name here",
        placeholder: "Full Name",
        hasError: false,
        readonly: false,
        type: "text",
        };
      const view = renderComponent(TextInputField);
      expect(view).toMatchSnapshot();
    });

    it('validate text field', () => {      
        const TextInputField:InputProps = {
        defaultValue: "",
        id: "fullName",
        label: "Full Name",
        labelDescription: "Enter full name here",
        placeholder: "Full Name",
        hasError: false,
        readonly: false,
        type: "text",
        };
      const view = renderComponent(TextInputField);
      const labelElement = screen.getByText("Enter full name here");
      expect(labelElement).toBeInTheDocument();

      const textElement = (screen.getByRole("textbox") as HTMLInputElement);
      expect(textElement).toBeInTheDocument();

      expect(textElement.type).toBe("text")
    });

    it('validate email field', () => {      
        const TextInputField:InputProps = {
            defaultValue: "",
            id: "email",
            label: "Email Address",
            labelDescription: "Enter email here",
            placeholder: "Email Address",
            hasError: false,
            readonly: false,
            type: "email",
        };
      const view = renderComponent(TextInputField);
      const labelElement = screen.getByText("Enter email here");
      expect(labelElement).toBeInTheDocument();

      const textElement = (screen.getByRole("textbox") as HTMLInputElement);
      expect(textElement).toBeInTheDocument();

      expect(textElement.type).toBe("email")
    });

    it('validate password field', () => {      
        const TextInputField:InputProps = {
            defaultValue: "",
            id: "password",
            label: "Password",
            labelDescription: "Enter password here",
            placeholder: "Your Password",
            hasError: false,
            readonly: false,
            type: "password",
        };
      const view = renderComponent(TextInputField);
      const labelElement = screen.getByText("Enter password here");
      expect(labelElement).toBeInTheDocument();

      const textElement = (screen.getByLabelText(/password/i) as HTMLInputElement);
      expect(textElement).toBeInTheDocument();

      expect(textElement.type).toBe("password")
    });

    it('validate readonly field', () => {      
        const TextInputField:InputProps = {
            defaultValue: "James Anderson",
            id: "fullName",
            label: "Full Name",
            labelDescription: "Enter full name here",
            placeholder: "Full Name",
            hasError: false,
            readonly: true,
            type: "text",
        };
      const view = renderComponent(TextInputField);
      const labelElement = screen.getByText("Enter full name here");
      expect(labelElement).toBeInTheDocument();

      const textElement = (screen.getByRole("textbox") as HTMLInputElement);
      expect(textElement).toBeInTheDocument();

      expect(textElement.disabled).toBe(true)
    });

    it('validate error field', () => {      
        const TextInputField:InputProps = {
            defaultValue: "",
            id: "fullName",
            label: "Full Name",
            labelDescription: "Enter full name here",
            placeholder: "Full Name",
            hasError: true,
            readonly: false,
            type: "text",
        };
      const view = renderComponent(TextInputField);
      const labelElement = screen.getByText("Enter full name here");
      expect(labelElement).toBeInTheDocument();

      const textElement = (screen.getByRole("textbox") as HTMLInputElement);
      expect(textElement).toBeInTheDocument();

      expect(textElement.className).toBe("fieldText mt-1 block w-full rounded-md bg-[#F5F5F5] shadow-sm focus:border-[#CBB4EA] focus:ring-[#CBB4EA] disabled:bg-[#E2E7ED] border-berry")
    });
})

import { useState } from "react";
import ContactInfoForm from "./ContactInfoForm";
import FinancialInfoForm from "./FinancialInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const Pages = {
  Step1: 1,
  Step2: 2,
  Step3: 3,
};

// Separate schemas for each step
const personalInfoSchema = z.object({
  fullName: z.string().min(1, { message: 'Field is required to fill.' }),
  email: z.string().min(1, { message: 'Field is required to fill.' }).email('Invalid email format')
});

const contactInfoSchema = z.object({
  phone: z.string().min(1, { message: 'Field is required to fill.' }),
  city: z.string().min(1, { message: 'Field is required to fill.' })
});

const financialInfoSchema = z.object({
  salary: z.string().min(1, { message: 'Field is required to fill.' }),
  bank: z.string().min(1, { message: 'Field is required to fill.' })
});

const FINAL_STEP = Pages.Step3;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(Pages.Step1);
  const [formData, setFormData] = useState({});

  // Get the current schema based on step
  const getCurrentSchema = (step) => {
    switch (step) {
      case Pages.Step1:
        return personalInfoSchema;
      case Pages.Step2:
        return contactInfoSchema;
      case Pages.Step3:
        return financialInfoSchema;
      default:
        return personalInfoSchema;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues
  } = useForm({
    resolver: zodResolver(getCurrentSchema(currentStep)),
    defaultValues: formData
  });

  const Steps = {
    [Pages.Step1]: PersonalInfoForm,
    [Pages.Step2]: ContactInfoForm,
    [Pages.Step3]: FinancialInfoForm,
  };

  const Component = Steps[currentStep];
  const isLastStep = currentStep === FINAL_STEP;
  const buttonText = isLastStep ? "Save" : "Next";

  const onSubmit = async (data) => {
    const isValid = await trigger(); // Validate current fields
    
    if (isValid) {
      const currentData = getValues();
      const updatedFormData = { ...formData, ...currentData };
      setFormData(updatedFormData);

      if (!isLastStep) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log("Final submit data", updatedFormData);
        // Handle final form submission here
      }
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentStep > Pages.Step1) {
      const currentData = getValues();
      setFormData({ ...formData, ...currentData });
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg shadow-emerald-500">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-green-500 rounded transition-all duration-300"
              style={{ width: `${(currentStep / FINAL_STEP) * 100}%` }}
            />
          </div>
        </div>
        
        <Component register={register} errors={errors} />
        
        <div className="flex gap-4">
          {currentStep > Pages.Step1 && (
            <button
              type="button"
              className="p-3 shadow-xl bg-red-300"
              onClick={handlePrev}
            >
              Previous
            </button>
          )}
          <button 
            type="submit" 
            className="p-3 shadow-xl bg-green-300"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faBuilding, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface WorkingDay {
  day: string;
  isChecked: boolean;
  startTime: string;
  endTime: string;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  companyEmail: string;
  domain: string;
  address: Address;
  workingDays: WorkingDay[];
}

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyEmail: '',
    domain: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    workingDays: [
      { day: 'Monday', isChecked: false, startTime: '', endTime: '' },
      { day: 'Tuesday', isChecked: false, startTime: '', endTime: '' },
      { day: 'Wednesday', isChecked: false, startTime: '', endTime: '' },
      { day: 'Thursday', isChecked: false, startTime: '', endTime: '' },
      { day: 'Friday', isChecked: false, startTime: '', endTime: '' },
      { day: 'Saturday', isChecked: false, startTime: '', endTime: '' },
      { day: 'Sunday', isChecked: false, startTime: '', endTime: '' },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [main, sub] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [main]: {
          ...(prevData[main as keyof FormData] as object),
          [sub]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleWorkingDayChange = (index: number, field: string, value: string | boolean) => {
    const updatedDays = formData.workingDays.map((day, i) =>
      i === index ? { ...day, [field]: value } : day
    );
    setFormData({ ...formData, workingDays: updatedDays });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle saving the form data
  };

  return (
    <section className="bg-purple-50 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-600 mb-8">Sign Up for a New Pro Account</h2>
      <div className="container mx-auto max-w-md bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          {step === 1 ? 'Create Your Account' : step === 2 ? 'Company Details' : step === 3 ? 'Address Details' : 'Working Days & Time'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: User Details */}
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faLock} className="text-purple-500 mr-2" />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faLock} className="text-purple-500 mr-2" />
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </>
          )}

          {/* Step 2: Company Details */}
          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faBuilding} className="text-purple-500 mr-2" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-2" />
                  Company Email
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faGlobe} className="text-purple-500 mr-2" />
                  Domain
                </label>
                <input
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </>
          )}

          {/* Step 3: Address Details */}
          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 mr-2" />
                  Street
                </label>
                <input
                  type="text"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 mr-2" />
                  City
                </label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 mr-2" />
                  State
                </label>
                <input
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 mr-2" />
                  Zip Code
                </label>
                <input
                  type="text"
                  name="address.zipCode"
                  value={formData.address.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 mr-2" />
                  Country
                </label>
                <input
                  type="text"
                  name="address.country"
                  value={formData.address.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </>
          )}

          {/* Step 4: Working Days & Time */}
          {step === 4 && (
            <>
              {formData.workingDays.map((day, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      <input
                        type="checkbox"
                        checked={day.isChecked}
                        onChange={(e) => handleWorkingDayChange(index, 'isChecked', e.target.checked)}
                        className="mr-2"
                      />
                      {day.day}
                    </label>
                    {day.isChecked && (
                      <>
                        <input
                          type="time"
                          value={day.startTime}
                          onChange={(e) => handleWorkingDayChange(index, 'startTime', e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                        <span className="mx-2">to</span>
                        <input
                          type="time"
                          value={day.endTime}
                          onChange={(e) => handleWorkingDayChange(index, 'endTime', e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

const Blogs = () => {
  return (
    <div className="relative bg-white text-black py-10">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">📚 React Blog Articles</h1>

        <div className="space-y-10">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3">1. What is useState and how does it work in React?</h2>
            <p className="text-gray-800">
              useState is a built-in hook that allows you to add state to functional components. It helps track data that can
              change over time and trigger re-rendering of the component whenever the state updates. This makes your
              component interactive and dynamic.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3">2. What is the purpose of useEffect in React?</h2>
            <p className="text-gray-800">
              useEffect is a hook used to handle side effects in React components. It allows you to perform tasks like
              fetching data, setting up subscriptions, or manually interacting with the DOM. It runs after the component
              renders and can be configured to run based on specific conditions.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3">3. What is a custom hook in React and when should you use one?</h2>
            <p className="text-gray-800">
              A custom hook is a reusable function that starts with the word “use” and allows you to extract and share logic
              across multiple components. It’s helpful when you have repeated hook-related logic and want to keep your
              components clean and maintainable.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3">
              4. Difference between controlled and uncontrolled components. Which one is better?
            </h2>
            <p className="text-gray-800">
              Controlled components are managed by React state, meaning every input change is handled by the component.
              Uncontrolled components rely on the DOM to handle the form data. Controlled components are usually better
              because they provide more control, validation, and integration with React features.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3">5. Tell us something about useFormStatus() in React.</h2>
            <p className="text-gray-800">
              useFormStatus is a hook that gives you the current status of a form submission. It’s useful for detecting if a
              form is currently being submitted, has errors, or has completed submission. This helps in improving user
              experience by managing states like loading, disabled buttons, or showing messages during form submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-fit px-6 bg-gray-900/95 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
          <span className="pl-1 ">Abracadabra 🪄</span>{" "}
        </>
      ) : (
        <>Cast your message! 🪄</>
      )}
    </button>
  );
};

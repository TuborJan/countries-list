"use client";

const error = ({ error }: { error: Error }) => {
  return (
    <div className="container max-w-screen-mobile px-2">
      <h1>Sorry. {error.message}</h1>
    </div>
  );
};

export default error;

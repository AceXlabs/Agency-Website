

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-10">
      {children}
    </div>
  );
}

export default Container;

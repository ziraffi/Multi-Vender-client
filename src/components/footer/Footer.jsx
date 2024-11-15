function Footer() {
  return (
    <footer className="flex flex-col w-full bottom-0 z-9999 min-h-40 justify-center items-center px-4 py-4 md:px-10 bg-gradient-to-tl from-purple-600 to-white border-b-emerald-800 border-fuchsia-500 backdrop-blur-sm space-y-2 gap-2">
        <div className="flex flex-col min-h-32 justify-between items-center md:flex-row w-full">
        <div className="flex-col w-1/3 items-center text-center min-h-10">Home</div>
        <div className="flex-col w-1/3 items-center text-center min-h-10">About</div>
        <div className="flex-col w-1/3 items-center text-center min-h-10">Contact</div>
        </div>
        <div className="flex-col md:flex-row">
            <span>Copyright@Multi-Vendor Management</span>
        </div>
    </footer>
  )
}

export default Footer

function InputOutput() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2">
      <textarea
        name="from"
        id="fromInput"
        className="p-2 border-2 border-[#f0f0f0] rounded-lg text-2xl resize-none"
      ></textarea>
      <p className="min-h-40 p-3 bg-[#f5f5f5] rounded-lg text-2xl">
        <span className="text-[#5F6368]">Traducción</span>
      </p>
    </div>
  )
}

export default InputOutput
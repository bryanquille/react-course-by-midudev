import TextArea from "./TextArea"

type InputOutputPropsTypes = {
  loading: boolean
  result: string
  fromText: string
  setFromText: (payload: string) => void
}

function InputOutput({
  loading,
  result,
  fromText,
  setFromText,
}: InputOutputPropsTypes) {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2">
      <TextArea
        name="from"
        placeholder="Escribe..."
        readonly={false}
        fromText={fromText}
        setFromText={setFromText}
      />
      <TextArea 
        name="to"
        placeholder="Traducción"
        readonly={true}
        loading={loading}
        result={result}
      />
    </div>
  )
}

export default InputOutput
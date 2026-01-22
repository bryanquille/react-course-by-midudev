type FactImageProps = {
    fact: string
    firstWord: string
    catImageUrl: string
}

function FactImage({fact, firstWord, catImageUrl}: FactImageProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <p className="px-8 text-center">
        {fact}
      </p>
      <img 
        src={catImageUrl} 
        alt={`Imagen de un gato con el texto ${firstWord}`}
        className="w-11/12 max-w-96 mb-8 rounded-2xl shadow-md shadow-amber-50" 
      />
    </div>
  )
}

export default FactImage
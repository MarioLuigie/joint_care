interface IErrorMsg {
  isClientError: boolean
  specificErrors: {error: boolean, msg: string}[]
}

export default function ErrorMsg({
  isClientError,
  specificErrors
}: IErrorMsg) {
  if (isClientError) {
    return (
      <>
        {specificErrors.map((error, i)=> {
          if (!error.error) {
            return (<div key={i} className="text-red text-xs ml-3">{error.msg}</div>)
          }
        })}
      </>
    ) 
  } else {
    return null
  }
}
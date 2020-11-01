import React,{useState} from 'react'

const SearchBox = ({history}) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }
    return (
        <div className="card my-4">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
            <form onSubmit={submitHandler}>
            <div className="input-group">
              <input type="text" className="form-control" name='q' onChange={e => setKeyword(e.target.value)} placeholder="Search for..." />
              <span className="input-group-append">
                <button className="btn btn-secondary" type="submit">Go!</button>
              </span>
            </div>
            </form>
          </div>
        </div>
    )
}

export default SearchBox

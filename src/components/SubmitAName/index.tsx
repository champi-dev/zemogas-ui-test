import './styles.css'
import { useState } from 'react'

const SubmitAName = () => {
  const [status, setStatus] = useState<'default' | 'typing' | 'submitted'>(
    'default',
  )

  return (
    <aside
      className="banner banner-bottom"
      role="doc-tip"
      aria-label="Submit a name"
    >
      <img
        srcSet="/assets/img/bg-people.png 750w, /assets/img/bg-people.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        className="banner__background"
        src="/assets/img/bg-people.png"
        alt=""
        role="none"
      />
      <div className="banner__left">
        <h2 className={`banner__heading ${status}`}>
          {status !== 'submitted'
            ? 'Is there anyone else you would want us to add?'
            : 'Thank you for submitting!'}
        </h2>
      </div>
      <div className="banner__right">
        {status === 'default' ? (
          <button
            className="banner__cta"
            data-testid="submit-name"
            onClick={() => setStatus('typing')}
          >
            Submit a name
          </button>
        ) : (
          <></>
        )}

        {status === 'typing' ? (
          <input type="text" placeholder="Type a name" />
        ) : (
          <></>
        )}

        {status === 'typing' ? (
          <button className="send-btn" onClick={() => setStatus('submitted')}>
            Send
          </button>
        ) : (
          <></>
        )}
      </div>
    </aside>
  )
}

export default SubmitAName

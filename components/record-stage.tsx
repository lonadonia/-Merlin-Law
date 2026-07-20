export function RecordStage({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`record-stage ${compact ? "record-stage-compact" : ""}`}>
      <div className="record-orbit" aria-hidden="true">
        <span>Record set / 4,186 pages</span>
        <span>Synthetic demonstration</span>
      </div>
      <div className="record-paper record-paper-back" aria-hidden="true">
        <span>PROVIDER INDEX</span>
        <i />
        <i />
        <i />
      </div>
      <div className="record-paper record-paper-mid" aria-hidden="true">
        <div className="paper-kicker">MATTER 071 / CHRONOLOGY</div>
        <div className="record-row"><b>2019</b><span>Prior lumbar imaging</span><em>p. 118</em></div>
        <div className="record-row"><b>2021</b><span>Date of loss</span><em>p. 342</em></div>
        <div className="record-row is-highlighted"><b>46 DAYS</b><span>Treatment gap surfaced</span><em>p. 417</em></div>
        <div className="record-row"><b>2022</b><span>Specialist referral</span><em>p. 809</em></div>
      </div>
      <div className="record-paper record-paper-front" aria-hidden="true">
        <div className="paper-head">
          <span>QUERY / 03</span>
          <span>GROUNDED RECORD ANSWER</span>
        </div>
        <p>When did the record first document a similar lumbar complaint?</p>
        <div className="answer-block">
          <span className="answer-rule" />
          <strong>Prior history located</strong>
          <span>3 record references indexed</span>
        </div>
        <div className="source-chip">SOURCE / P. 118</div>
      </div>
      <div className="scan-line" aria-hidden="true" />
      <figcaption>Conceptual interface using fictional, anonymized demonstration content.</figcaption>
    </figure>
  );
}

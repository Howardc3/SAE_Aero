import DollarScroll from '../../../components/dollar_scroll';

export default function ReimbursementPage() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-prussian-blue">Reimbursement</h1>
        <p className="mt-4 max-w-2xl text-lg text-deep-navy">
          Access reimbursement information, process details, and required forms.
        </p>
      </main>
      <div className="h-[300vh]">
        <DollarScroll>
          <h2 className="text-4xl font-bold text-frosted-blue">Money Money Money</h2>
        </DollarScroll>
      </div>
    </div>
  );
}

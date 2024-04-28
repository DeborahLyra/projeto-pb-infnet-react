
export default function Profile() {
  return (
    <div>
      <div className="px-4  sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white">Informações do Perfil</h3>
      </div>


      <div className='flex gap-5 p-4 flex-col items-center lg:flex-row lg:gap-8'>

        <div className='p-1 lg:self-start'>
          <img
            className="inline-block  h-20 w-20 rounded-full ring-2 ring-white md:w-40  md:h-40 lg:w-80  lg:h-40 "
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white">Nome completo</dt>
              <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">Bruce Foster</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white-900">Email</dt>
              <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">brucefoster@example.com</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white-900">Nome de usuário</dt>
              <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">Centenario22</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-white-900">Sobre</dt>
              <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>



      </div>



    </div>
  )
}

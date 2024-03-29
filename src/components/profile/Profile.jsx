import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Profile() {
  return (
    <div>
      <div className="px-4  sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white">Informações do Perfil</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Nome completo</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Nome de usuário</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">Centenário22</dd>
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
  )
}

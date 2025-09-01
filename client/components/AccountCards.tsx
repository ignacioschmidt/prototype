import { useState } from "react";

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  badge?: string;
}

function QuickAction({ icon, label, onClick, badge }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center relative"
    >
      {/* New pill badge */}
      {badge && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-white text-xs font-semibold px-1 py-0.5 rounded-full text-center z-10">
          {badge}
        </div>
      )}
      
      {/* Icon container */}
      <div className="w-12 h-12 bg-white border border-neutral-300/70 rounded-2xl flex items-center justify-center mb-2">
        {icon}
      </div>
      
      {/* Label */}
      <span className="text-xs text-primary-500 text-center font-normal leading-4 max-w-12">
        {label}
      </span>
    </button>
  );
}

interface AccountCardProps {
  title: string;
  badge?: string;
  currency: string;
  amount: string;
  decimals?: string;
  isBalanceVisible: boolean;
  onToggleBalance: () => void;
  quickActions: QuickActionProps[];
  recentTransaction?: {
    type: string;
    amount: string;
  };
}

function AccountCard({
  title,
  badge,
  currency,
  amount,
  decimals,
  isBalanceVisible,
  onToggleBalance,
  quickActions,
  recentTransaction,
}: AccountCardProps) {
  return (
    <div className="bg-white border border-neutral-300/70 rounded-2xl p-4 shadow-sm min-w-[276px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-base font-medium text-neutral-800">{title}</span>
          {badge && (
            <div className="bg-success-600 text-white text-xs font-medium px-1 py-0.5 rounded-full">
              {badge}
            </div>
          )}
        </div>
        <div className="text-primary-500">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </div>
      </div>

      {/* Balance */}
      <div className="mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-end space-x-1">
            <span className="text-lg font-semibold text-neutral-800 pb-0.5">{currency}</span>
            {isBalanceVisible ? (
              <>
                <span className="text-3xl font-semibold text-neutral-800 leading-9">{amount}</span>
                {decimals && (
                  <span className="text-sm font-semibold text-neutral-800 pb-2">{decimals}</span>
                )}
              </>
            ) : (
              <span className="text-3xl font-semibold text-neutral-800 leading-9">••••••</span>
            )}
          </div>
          <button
            onClick={onToggleBalance}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
              {isBalanceVisible ? (
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
              ) : (
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-between space-x-4">
        {quickActions.map((action, index) => (
          <QuickAction key={index} {...action} />
        ))}
      </div>

      {/* Recent Transaction (if available) */}
      {recentTransaction && (
        <div className="mt-3 pt-3 border-t border-neutral-200">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-800 font-medium">{recentTransaction.type}</span>
            <span className="text-success-600 font-semibold">{recentTransaction.amount}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AccountCards() {
  const [isPesoBalanceVisible, setIsPesoBalanceVisible] = useState(false);
  const [isDollarBalanceVisible, setIsDollarBalanceVisible] = useState(false);

  const pesoQuickActions: QuickActionProps[] = [
    {
      icon: (
        <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      ),
      label: "Ingresar",
      onClick: () => console.log("Ingresar clicked"),
    },
    {
      icon: (
        <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
          <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
        </svg>
      ),
      label: "Transferir",
      onClick: () => console.log("Transferir clicked"),
    },
    {
      icon: (
        <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V8h-2v5z"/>
        </svg>
      ),
      label: "Extraer",
      onClick: () => console.log("Extraer clicked"),
    },
  ];

  const dollarQuickActions: QuickActionProps[] = [
    {
      icon: (
        <div className="text-primary-500 text-xs font-semibold">MEP</div>
      ),
      label: "Comprar MEP",
      onClick: () => console.log("MEP clicked"),
    },
    {
      icon: (
        <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
          <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
        </svg>
      ),
      label: "Transferir",
      onClick: () => console.log("Transferir clicked"),
    },
    {
      icon: (
        <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V8h-2v5z"/>
        </svg>
      ),
      label: "Extraer",
      onClick: () => console.log("Extraer clicked"),
    },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto px-4 pb-4">
      {/* Peso Account */}
      <AccountCard
        title="Cuenta en pesos"
        badge="CVU"
        currency="$"
        amount="54.321"
        decimals=",45"
        isBalanceVisible={isPesoBalanceVisible}
        onToggleBalance={() => setIsPesoBalanceVisible(!isPesoBalanceVisible)}
        quickActions={pesoQuickActions}
        recentTransaction={{
          type: "Movimientos",
          amount: "+$ 22.000,00"
        }}
      />

      {/* Dollar Account */}
      <AccountCard
        title="Cuenta en dólares"
        badge="MEP"
        currency="USD"
        amount="1"
        isBalanceVisible={isDollarBalanceVisible}
        onToggleBalance={() => setIsDollarBalanceVisible(!isDollarBalanceVisible)}
        quickActions={dollarQuickActions}
      />
    </div>
  );
}

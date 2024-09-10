# eslint-plugin-no-one-letter-generics

Eslint plugin to ban the one-letter [TypeScript generic types](https://www.typescriptlang.org/docs/handbook/2/generics.html)

## Usage

Install it with your package manager

With npm:
```bash
npm i -D plugin-no-one-letter-generics
```

With pnpm:
```bash
pnpm add -D plugin-no-one-letter-generics
```

With yarn:
```bash
yarn add plugin-no-one-letter-generics --dev
```

```json
{
	"plugins": ["no-one-letter-generics"],
	"rules": {
		"no-one-letter-generics/no-one-letter-generics": ["warn"]
	}
}
```

Incorrect examples ❌

```ts
interface Response<T> {
  data: T;
  error: string;
  loading: boolean;
}
```

```ts
function fetchPaginatedData<T, P, R>(endpoint: string, params: P): Promise<[T[], R]> {
  return fetch(endpoint, { params }).then(response => response.json());
}
```

Correct examples ✅

```ts
interface Response<Data> {
  data: Data;
  error: string;
  loading: boolean;
}
```

```ts
function fetchPaginatedData<Item, Params, MetaData>(
  endpoint: string, 
  params: Params
): Promise<[Item[], MetaData]> {
  return fetch(endpoint, { params }).then(response => response.json());
}
```
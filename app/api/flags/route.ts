import { NextResponse } from 'next/server';
import { verifyAccess } from '@vercel/flags';

export async function GET(request: Request) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });

  return NextResponse.json({
    definitions: {
      'show-page-1': {
        description: 'Controls visibility of Page 1',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
      'show-page-2': {
        description: 'Controls visibility of Page 2',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
      'show-page-3': {
        description: 'Controls visibility of Page 3',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
      'show-page-4': {
        description: 'Controls visibility of Page 4',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
      'show-page-5': {
        description: 'Controls visibility of Page 5',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
    },
  });
}


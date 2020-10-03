export const PERMISSIONS = ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'] as const;

type Permission = typeof PERMISSIONS[number];

export type IGroup = {
    id?: string;
    name: string;
    permissions: Array<Permission>;
}
